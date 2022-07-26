import React from "react";
import "./input.css";
import { Container, Row, Col } from "react-bootstrap";

const Input = () => {
  return (
    <>
      {/* BIG SCREENS */}
      <div className="bigscreen">
        <div className="gridcontainer">
          <div className="item1">
            <span className="headingone">Home/Writing Assistant</span>
          </div>
          <div className="item2">
            <div className="twobtns">
              <button className="btnnone">Save</button>
              <button className="btnnone">Filter</button>
            </div>
          </div>

          <div className="item3">
            <span className="headingtwo">
              {" "}
              Enter input to get{" "}
              <span className="bluetxt">Writing Assistant</span>
            </span>
          </div>

          {/* word count */}
          <div className="item4">
            <span className="txtthree">Words count:</span>
            <span className="bluebox">
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="10"
              />
            </span>
          </div>
          {/* prompt */}
          <div className="item5">
            <span className="txtthree">Prompt:</span>
            <span className="bluebox">
              <select id="cars" name="list" form="form">
                <option value="abc">ABC</option>
                <option value="efg">EFG</option>
                <option value="xyz">XYZ</option>
              </select>
            </span>
          </div>
          {/* creativity*/}
          <div className="item6">
            <span className="txtthree">Creativity:</span>
            <span className="bluebox">
              <select id="cars" name="list" form="form">
                <option value="abc">ABC</option>
                <option value="efg">EFG</option>
                <option value="xyz">XYZ</option>
              </select>
            </span>
          </div>

          <div className="item7">
            <div className="onebtn">
              <button className="btnntwo"> Write for me</button>
            </div>
          </div>

          <div className="item8">
            <div className="wordcountmain">
              <div className="wordcountchild">word:00 | character:0/250</div>
            </div>

            <div className="mainbox">
              <div className="flexfunc">
                <div className="boxi">B</div>
                <div className="boxi">I</div>
                <div className="texti">hyperlink</div>
                <div className="texti">text cut</div>
                <div className="texti">underline</div>
                <div className="texti">underline</div>
              </div>
              <textarea placeholder="Type here" rows={10} cols={80}></textarea>
            </div>
          </div>

          <div className="item9">
            <div className="rightbox">
              <div className="cleartextmain">
                <div className="cleartext">Clear</div>
              </div>

              <div className="copied">
                <span className="copy"> Copy |</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates illo distinctio quod culpa. Deleniti odio
                </span>
              </div>
              <div className="copied">
                <span className="copy"> Copy |</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates illo distinctio quod culpa. Deleniti odio
                </span>
              </div>
              <div className="copied">
                <span className="copy"> Copy |</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates illo distinctio quod culpa. Deleniti odio
                  optio molestiae molestias maiores delectus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SMALL SCREENS */}
      <div className="smallscreens">
        <Container className="maincon">
          <Row className="rowone">
            <Col>
              <div className="headingone">Home/Template</div>
            </Col>
            <Col>
              <div className="savecon">
                <div className="saveconchild">
                  <button className="btnsave">Save</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="rowtwo">
              <span className="headingtwo">
                Enter input to get{" "}
                <span className="bluetext">Writing Assistant</span>
              </span>
            </div>
          </Row>
          <Row className="rowthree">
            <Col>
              {" "}
              <span className="txtthree">Words count:</span>
              <span className="bluebox">
                <input
                  type="number"
                  id="quantity"
                  name="quantnity"
                  min="0"
                  max="10"
                />
              </span>
            </Col>
            <Col>
              <span className="txtthree">Prompt:</span>
              <span className="bluebox">
                <select id="cars" name="list" form="form">
                  <option value="abc">ABC</option>
                  <option value="efg">EFG</option>
                  <option value="xyz">XYZ</option>
                </select>
              </span>
            </Col>
          </Row>
          <Row className="rowfour">
            <Col>
              <span className="txtthree">Creativity:</span>
              <span className="bluebox">
                <select id="cars" name="list" form="form">
                  <option value="abc">ABC</option>
                  <option value="efg">EFG</option>
                  <option value="xyz">XYZ</option>
                </select>
              </span>
            </Col>
          </Row>
          <Row className="rowfour">
            <div className="wordcon">
              <div className="wordconchild">word:00 | character:0/250</div>
            </div>
          </Row>

          <Row className="rowfive">
            <div className="mainbox">
              <div className="flexfunc">
                <div className="boxi">B</div>
                <div className="boxi">I</div>
                <div className="texti">hyperlink</div>
                <div className="texti">text cut</div>
                <div className="texti">underline</div>
              </div>
              <textarea placeholder="Type here" rows={10}></textarea>
            </div>
          </Row>
          <Row className="rowfive">
            <div>
              <div className="writecon">
                <button className="write">Write for me</button>
              </div>
            </div>
          </Row>

          <Row className="rowfive">
            <div>
              <div className="copied">
                <span className="copy"> Copy |</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates illo distinctio quod culpa. Deleniti odio
                </span>
              </div>
            </div>
          </Row>
          <Row className="rowfive">
            <div>
              <div className="copied">
                <span className="copy"> Copy |</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptates illo distinctio quod culpa. Deleniti odio
                </span>
              </div>
            </div>
          </Row>
          <Row className="rowtwo">
            <Col>
              <div className="navtxt">Home</div>
            </Col>
            <Col>
              <div className="navtxt">Marketing</div>
            </Col>
            <Col>
              <div className="navtxt">Social Media</div>
            </Col>
            <Col>
              <div className="navtxt">Sales Copy</div>
            </Col>
            <Col>
              <div className="navtxt">Blogs </div>
            </Col>
            <Col>
              <div className="navtxt">Others</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Input;
