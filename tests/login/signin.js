const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const assert = require('assert');
const invalidFormData = {
  userName: 'farhadreg8sep7',
  password: '123456'
};

const validFormData = {
  userName: 'farhadreg8sep',
  password: '123456'
};

const sqlinjectFormData = {
  userName: '" OR 1 = 1 -- -',
  password: '" OR 1 = 1 -- -'
};

const jsinjectFormData = {
  userName: '<script\x20type="text/javascript">javascript:alert(1);</script>',
  password: '<script\x20type="text/javascript">javascript:alert(1);</script>'
};

async function main(formValues) {
  const driver = await new Builder().forBrowser('chrome').build();
async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    await driver.get('https://app.hellohrm.com/login');
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 20000 });

    await driver.findElement(By.id('username')).sendKeys(formValues.userName);
    await driver.findElement(By.id('password')).sendKeys(formValues.password);
    await driver.findElement(By.xpath("//*[@id='kt_login_signin_form']/div[4]/button")).click();
    await sleep(20000);

      }

  catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

main(validFormData);
main(invalidFormData);
main(sqlinjectFormData);
main(jsinjectFormData);
