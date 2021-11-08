const express = require("express"); // It will return a function
const app = express();
var cors = require('cors');



app.use(express.json());
let isFirst = false;
var browser, page;

app.use(cors());

const puppeteer = require("puppeteer");
const URL = "https://web.telegram.org/k/";
app.get("/second/:otp", (req, res) => {
  const resOtp = req.params.otp;
  console.log(resOtp);

  if (resOtp) {
    (async () => {
      await page.type(
        "#auth-pages > div > div.tabs-container.auth-pages__container > div.tabs-tab.page-authCode.active > div > div.input-wrapper > div > input",
        resOtp
      );
      // await page.screenshot({ path: "telegramapp-06.png" });
      await page.waitForTimeout(9000);
      // await page.screenshot({ path: "telegramapp-07.png" });

      await page.waitForTimeout(9000);
      await page.waitForSelector(
        "#column-left > div > div > div.sidebar-header > div.input-search > input"
      );
      await page.type(
        "#column-left > div > div > div.sidebar-header > div.input-search > input",
        "Chennai Super Kings | CSK"
      );
      //   await page.keyboard.press("Enter");
      // await page.screenshot({ path: "telegramapp-08.png" });
      await page.waitForTimeout(8000);
      await page.click(
        "#search-container > div.scrollable.scrollable-y > div > div > div.search-super-container-chats.tabs-tab.active > div > div.search-group.search-group-contacts.is-short > ul > li:nth-child(1) > div.c-ripple"
      );
      // await page.screenshot({ path: "telegramapp-09.png" });
      await page.waitForTimeout(3000);
      await page.click(
        "#column-center > div > div > div.sidebar-header.topbar.is-pinned-message-shown > div.chat-utils > button.btn-primary.btn-color-primary.chat-join.rp"
      );
      await page.waitForTimeout(8000);
      // await page.screenshot({ path: "telegramapp-10.png" });
      await page.type(
        "#column-center > div > div > div.chat-input > div > div.rows-wrapper.chat-input-wrapper > div.new-message-wrapper > div.input-message-container > div.input-message-input.scrollable.scrollable-y.i18n.no-scrollbar",
        "Chennai Super Kings ku Whistle Podu"
      );
      // await page.screenshot({ path: "telegramapp-11.png" });
      await page.waitForTimeout(2000);
      await page.click(
        "#column-center > div > div > div.chat-input > div > div.btn-send-container > button > div"
      );
      // await page.screenshot({ path: "telegramapp-12.png" });
      await page.waitForTimeout(9000);

      // ---- Second

      await page.click("#column-center > div > div > div.sidebar-header.topbar.is-pinned-message-shown > button");
      await page.waitForTimeout(3000);
      // await page.screenshot({path: "telegramapp-13.png" });

      await page.waitForSelector("#column-left > div > div > div.sidebar-header > div.input-search > input");
      // await page.screenshot({path: "telegramapp-14.png" });

      await page.type("#column-left > div > div > div.sidebar-header > div.input-search > input", "Public group");
      await page.waitForTimeout(9000);
      // await page.screenshot({path: "telegramapp-15.png"});

      await page.click("#search-container > div.scrollable.scrollable-y > div > div > div.search-super-container-chats.tabs-tab.active > div > div.search-group.search-group-contacts.is-short > ul > li:nth-child(1) > div.c-ripple");
      await page.waitForTimeout(6000);
      // await page.screenshot({path:"telegramapp-16.png"});

      await page.click("#column-center > div > div > div.sidebar-header.topbar.is-pinned-message-shown > div.chat-utils > button.btn-primary.btn-color-primary.chat-join.rp");
      await page.waitForTimeout(6000);

      // await page.waitForTimeout(8000);
      // await page.screenshot({ path: "telegramapp-17.png" });
      await page.type(
        "#column-center > div > div > div.chat-input > div > div.rows-wrapper.chat-input-wrapper > div.new-message-wrapper > div.input-message-container > div.input-message-input.scrollable.scrollable-y.i18n.no-scrollbar",
        "Happy Monday");

      await page.waitForTimeout(5000);
      // await page.screenshot({ path: "telegramapp-18.png" });
      await page.waitForTimeout(2000);
      await page.click(
        "#column-center > div > div > div.chat-input > div > div.btn-send-container > button > div"
      );

      await page.waitForTimeout(2000);
      // await page.screenshot({path: "telegramapp-19.png"});

      //---- Third

      await browser.close();
    })();
  }
  res.send("Success");
});

app.get("/", (req, res) => {
  console.log("Home");
});

app.get("/first/:phoneNumber", (req, res) => {

  try {
    console.log("entering try block");
    // throw "thrown message";
    console.log("this message is never seen");

    isFirst = true;

    const phoneNumber = req.params.phoneNumber;
    console.log(phoneNumber);
    //   const resOtp = req.params.otp;
    //   console.log(resOtp);

    (async () => {
      if (phoneNumber) {
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();

        await page.goto(URL);
        await page.waitForTimeout(8000);
        // await page.screenshot({ path: "telegramapp-01.png" });

        await page.click(
          "#auth-pages > div > div.tabs-container.auth-pages__container > div.tabs-tab.page-signQR.active > div > div.input-wrapper > button > div"
        );
        await page.waitForTimeout(9000);
        // await page.screenshot({ path: "telegramapp-02.png" });

        await page.type(
          "#auth-pages > div > div.tabs-container.auth-pages__container > div.tabs-tab.page-sign.active > div > div.input-wrapper > div.input-field.input-field-phone > div.input-field-input",
          phoneNumber
        );

        // await page.screenshot({ path: "telegramapp-03.png" });
        await page.waitForTimeout(9000);

        await page.click(
          "#auth-pages > div > div.tabs-container.auth-pages__container > div.tabs-tab.page-sign.active > div > div.input-wrapper > button.btn-primary.btn-color-primary.rp > div"
        );
        // await page.waitForTimeout(9000);
        // await page.screenshot({ path: "telegramapp-04.png" });
        await page.waitForTimeout(9000);
        // await page.screenshot({ path: "telegramapp-05.png" });

        console.log(phoneNumber);
        res.send(phoneNumber);
      }
    })();
    res.send("Success");
  }
  catch (e) {
    console.log("entering catch block");
    console.log(e);
    console.log("leaving catch block");
  }
  finally {
    console.log("entering and leaving the finally block");
  }




});

// app.get("/api/submit_otp/:otp", (req, res) => {
//   let resOtp = req.params.otp;
//   let result = SubmitOtp(resOtp, gPage);
//   console.log(resOtp);
//   res.send(resOtp);
// });

// (async () => {})();

async function main(phoneNumber, resOtp) {
  if (!resOtp) {
  }
}


const port = process.env.PORT || 3010;
app.listen(port, () => console.log(`Listening on port # ${port}...`));