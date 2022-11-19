import { useState } from "react";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Cards, HomeCon } from "./Dashboard-styled";


function Dashboard() {
  const [modal, setModal] = useState(false);
  return (
    
    <HomeCon>
      {modal && <Modal />}
      <h3
        onClick={(e) => {
          setModal(true);
        }}
      >
        Dashboard
      </h3>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cards>
    </HomeCon>
  );
}

export default Dashboard;
