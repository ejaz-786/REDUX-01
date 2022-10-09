import { Button, DisplayText, Page, TextField } from "@shopify/polaris";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "../REDUX/container";

const LoginContainer = (props) => {
  let navigate = useNavigate();
  
  const SendData = (event) => {
    event.preventDefault();
    // console.log(props);
    console.log();
    // console.log(props.customerName);

    const getApi = async () => {
      const response = await fetch(
        `https://fbapi.sellernext.com/user/login?username=${props.userName}&password=${props.password}`,
        {
          headers: {
            authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA",
          },
        }
      );

      const datas = await response.json();
      if (datas.success) {
        sessionStorage.setItem("user_name",props.userName);
        sessionStorage.setItem("customer_name",props.customerName)
        sessionStorage.setItem("password",props.password)
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
    };
    getApi();
   
  };

  return (
    <>
      <Page>
        <div
          style={{
            width: "80%",
            margin: "auto",
            padding: "20px",
            border: "1px solid gray",
            borderRadius: "8px",
            marginTop: "15px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <DisplayText>LOGIN FORM</DisplayText>
          </div>
          <TextField
            label="Customer Name"
            value={props.customerName}
            onChange={(e) => props.AddDetail({ value: e, key: "customerName" })}
            autoComplete="off"
          />
          <TextField
            label="User Name"
            value={props.userName}
            onChange={(e) => props.AddDetail({ value: e, key: "userName" })}
            autoComplete="off"
          />
          <TextField
            label="Password"
            value={props.password}
            onChange={(e) => props.AddDetail({ value: e, key: "password" })}
            autoComplete="off"
          />
          <div style={{ marginTop: "8px" }}>
            <Button primary onClick={SendData}>
              Submit
            </Button>
          </div>
        </div>
      </Page>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
