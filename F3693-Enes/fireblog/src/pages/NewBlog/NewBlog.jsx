import Card from "../../components/Card/Card"
import { Cards, HomeCon } from "./Newblog-styled"


function NewBlog() {
  return (
    <HomeCon>
      <h3>Dashboard</h3>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Cards>
    </HomeCon>
  )
}

export default NewBlog