const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
// const assert = require('assert');

const validFormData = {
  userName: 'farhadreg8sep',
  password: '123456'
};
async function main(formValues) {
  const driver = await new Builder().forBrowser('chrome').build();
async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    await driver.get('https://app.hellohrm.com/login');
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 10000 });

    await driver.findElement(By.id('username')).sendKeys(formValues.userName);
    await driver.findElement(By.id('password')).sendKeys(formValues.password);
    await driver.findElement(By.xpath("//*[@id='kt_login_signin_form']/div[4]/button")).click();
    await sleep(5000);
//MODAL CLOSE
    // Locate the modal dialog element (you may use any suitable locator for the modal).
        const modal = await driver.findElement(By.id('noticeModalContent'));

        // Check if the modal is displayed.
        if (await modal.isDisplayed()) {
          // Locate the close button within the modal and click it.
          const closeButton = await modal.findElement(By.className('btn btn-secondary notice-cancel-btn'));
          await closeButton.click();
          console.log('Closed the modal.');
        } else {
          console.log('Modal is not displayed.');
        }
        await sleep(5000);
    
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[1]/ul/li[6]/a')).click();

    // Others Source start from here
    await driver.findElement(By.linkText('Add Worklog')).click();
    await sleep(5000);
    await driver.findElement(By.id('others-connected')).click();
    await sleep(2000);
    // await driver.findElement(By.id('add_date')).click();
    await driver.findElement(By.id('others-connected')).click();
    await sleep(2000);
//Customer Selection
    await driver.findElement(By.id('customer_id')).click();
    await sleep(3000);
    // Defining the index of the option you want to select.
    const customerIndexToSelect = 1;

    // Locating all the option elements within the dropdown.
    const customerOptions = await driver.findElements(By.css('#customer_id option'));

    if (customerIndexToSelect >= 0 && customerIndexToSelect < customerOptions.length) {
      // Click the option by its index.
      await customerOptions[customerIndexToSelect].click();
      console.log(`Selected option at index ${customerIndexToSelect}`);
      await sleep(3000);
    } else {
      console.error('Invalid index or out of range.');
    }
    await sleep(3000);
//Project Selection
    await driver.findElement(By.id('project_id')).click();
    await sleep(3000);
    // Define the index of the option you want to select.
    const projectIndexToSelect = 1;

    // Locating all the option elements within the dropdown.
    const projectOptions = await driver.findElements(By.css('#project_id option'));

    if (projectIndexToSelect >= 0 && projectIndexToSelect < projectOptions.length) {
      // Click the option by its index.
      await projectOptions[projectIndexToSelect].click();
      console.log(`Selected option at index ${projectIndexToSelect}`);
      await sleep(3000);
    } else {
      console.error('Invalid index or out of range.');
    }
    await sleep(3000);
    const checkbox = await driver.findElement(By.id('use_previous_task')).click();
    await sleep(3000);
//Task selectio/input task name
    const inputField = await driver.wait(until.elementLocated(By.id('task_title')), 10000);
    await sleep(2000);
    await inputField.sendKeys("হাঁসের মাংস অর্ডার দিয়ে ৫৬ লাখ টাকা খোয়ালেন বৃদ্ধ");
    await sleep(2000);

    let hours_workOthers = await driver.findElement(By.name('hours_worked'));
    await hours_workOthers.sendKeys('2');

    let minutes_workOthers = await driver.findElement(By.name('minutes_worked'));
    await minutes_workOthers.sendKeys('2');

    let descriptionOthers = await driver.findElement(By.id('description'));
    await descriptionOthers.sendKeys('Selenium learning');

    await driver.findElement(By.id('submit_button')).submit();
      }

  catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

main(validFormData);
