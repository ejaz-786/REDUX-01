import React from "react";
import {
  TopBar,
  ActionList,
  Frame,
} from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

function Dashboard() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );



  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  // gettig customer name from session storage...

  let customername = sessionStorage.getItem('customer_name');
  console.log(customername);

  const logo = {
    width: 124,
    topBarSource:
      "https://cdn4.iconfinder.com/data/icons/agile-4-filled-outline/128/Agile_4_-_Stroke-_Ps_Style_-_1-13-512.png",
    // url: "http://jadedpixel.com",
    accessibilityLabel: "Dashboad",
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Back to Login Page", icon: ArrowLeftMinor }],
        },
  
      ]}
      name={customername}
      initials={customername[0]}
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search here"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  return (
    <div style={{ height: "250px" }}>
      <Frame topBar={topBarMarkup} logo={logo} />
    </div>
  );
}

export default Dashboard;
