import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "./logo.png";

export default ({ accounts, BitGuanoToken }) => (
  <div className="App">
    <div>
      <img style={{
        height: 'auto',
        width: '200px'
      }} src={logo} alt="logo" />
      <h1>BitGuanoToken</h1>
      <p>Send ETH to: {"0x8535f050178bB16998A8a060dac1C77bb0cc82A9"}</p>
    </div>

    <div style={{
      backgroundColor: '#fafafa',
      position: 'absolute',
      top: 0, right: 0, left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b226b'
    }}>
      <div>
        <h2>Active Account</h2>
        <AccountData accountIndex="0" units="ether" precision="3" />
      </div>
    </div>

    <div className="section">
      <p>
        <strong>Total Supply: </strong>
        <ContractData
          contract="BitGuanoToken"
          method="totalSupply"
          methodArgs={[{ from: accounts[0] }]}
        />{" "}
        <ContractData contract="BitGuanoToken" method="symbol" hideIndicator />
      </p>
      <p>
        <strong>My Balance: </strong>
        <ContractData
          contract="BitGuanoToken"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </p>
      <h3>Send Tokens</h3>
      <ContractForm
        contract="BitGuanoToken"
        method="transfer"
        labels={["To Address", "Amount to Send"]}
      />
    </div>
  </div>
);
