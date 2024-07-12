import { connect } from "react-redux";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Currency from "components/Currency/currency.component";

import { getAccountTransactions } from "store/transactions/transactions.action";
import { getAccountBalance } from "store/accounts/accounts.action";
import BasicTooltip from "components/Tooltip/tooltip.component";
import { deleteAccount } from "store/accounts/accounts.action";
import { useState } from "react";
import Header from "components/Header/header.component";

const AccountList = ({
  title,
  accountList,
  getAccountTransactions,
  getAccountBalance,
  deleteAccount,
  mt,
  header,
  ...rest
}) => {
  const navigate = useNavigate();
  const { accounts, totalAmount } = accountList;
  const [fakeSavings, setFakeSavings] = useState(true);

  const handleAccountSelect = (accountId, subtype) => {
    console.log(fakeSavings);
    if (subtype.toLowerCase().includes("savings") && fakeSavings) {
      setFakeSavings(false);
    } else {
      getAccountTransactions(accountId);
      getAccountBalance(accountId);
      navigate("/accounts/account");
    }
  };

  const renderItems = accounts?.map(
    (
      {
        accountId,
        name,
        balanceAvailable,
        balanceCurrent,
        officialName,
        type,
        subtype
      },
      key
    ) => (
      <MDBox
        key={name}
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="lg"
        py={1}
        pr={2}
        mb={accounts.length - 1 === key ? 0 : 1}
      >
        <MDTypography
          variant="button"
          color={"dark"}
          sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,

            "&:hover, &:focus": {
              transform: "translateX(5px)"
            }
          }}
        >
          <MDBox display="flex" alignItems="center">
            <MDBox
              display="grid"
              alignItems="center"
              justifyContent="center"
              bgColor={"dark"}
              borderRadius="lg"
              shadow="md"
              color="white"
              width="2rem"
              height="2rem"
              mr={2}
              variant="gradient"
              fontSize="0.875rem"
            >
              <Icon
                sx={{
                  display: "grid",
                  placeItems: "center"
                }}
              >
                {"currency_exchange"}
              </Icon>
            </MDBox>
            <MDBox display="flex" flexDirection="column">
              <MDTypography
                variant="button"
                color={"dark"}
                fontWeight="medium"
                gutterBottom
              >
                {name}{" "}
              </MDTypography>
              <MDTypography variant="caption" color="text">
                <>
                  {officialName ? officialName : name} -{" "}
                  <MDTypography
                    variant="caption"
                    color="info"
                    fontWeight="medium"
                  >
                    <Currency
                      value={
                        subtype.toLowerCase().includes("checking") ||
                        type.toLowerCase().includes("savings")
                          ? balanceAvailable
                          : balanceCurrent
                      }
                    />
                  </MDTypography>
                </>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDTypography>
        {/* <MDTypography
          variant="button"
          color={'dark'}
          sx={{
            lineHeight: 0,
            transition: 'all 0.2s cubic-bezier(.34,1.61,.7,1.3)',
            p: 0.5,

            '&:hover, &:focus': {
              transform: 'translateX(5px)'
            }
          }}
        >
        </MDTypography> */}
      </MDBox>
    )
  );

  return (
    <Card sx={{ mx: 0, px: 2, mt: 0 }} {...rest}>
      {header && <Header title={header} />}

      <MDBox pt={2} px={2}>
        <MDTypography component="span" variant="h6" fontWeight="bold">
          {title}{" "}
          <MDTypography variant="h6" fontWeight="bold" color="success">
            <Currency value={totalAmount} />
          </MDTypography>
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </MDBox>
      </MDBox>
    </Card>
  );
};

// Typechecking props for the AccountList
AccountList.propTypes = {
  title: PropTypes.string,
  accounts: PropTypes.arrayOf(PropTypes.object),
  getAccountTransactions: PropTypes.func.isRequired,
  getAccountBalance: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

export default connect(null, {
  getAccountTransactions,
  getAccountBalance,
  deleteAccount
})(AccountList);
