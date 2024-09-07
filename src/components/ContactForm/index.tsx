import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import Block from "../Block";
import { Button } from "../../common/Button"; // Assuming you still want to use your styled Button
import { ContactContainer, FormGroup, ButtonContainer } from "./styles";

const Contact = ({ title, content, id, t }: ContactProps) => {
  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <form
              action="https://formspree.io/xrbzdawe"  // Replace with your actual Formspree form ID
              method="post"
              autoComplete="off"
            >
              <FormGroup>
                <Col span={24}>
                  <label htmlFor="name">{t("Your Name")}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={t("Your Name")}
                    required
                  />
                </Col>
                <Col span={24}>
                  <label htmlFor="email">{t("Your Email")}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={t("Your Email")}
                    required
                  />
                </Col>
                <Col span={24}>
                  <label htmlFor="message">{t("Your Message")}</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder={t("Your Message")}
                    required
                  />
                </Col>
                <ButtonContainer>
                  <Button >{t("Submit")}</Button>
                </ButtonContainer>
              </FormGroup>
            </form>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
