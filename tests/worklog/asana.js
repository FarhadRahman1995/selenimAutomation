const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

async function main() {
  const driver = await new Builder().forBrowser('chrome').build();
async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    await driver.get('https://app.hellohrm.com/login');
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({ implicit: 10000 });

    await driver.findElement(By.id('username')).sendKeys('farhadreg8sep');
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.findElement(By.xpath("//*[@id='kt_login_signin_form']/div[4]/button")).click();
    await sleep(5000);
//MODAL CLOSE
    // Locate the modal dialog element (you may use any suitable locator for the modal).
        const modal = await driver.findElement(By.id('noticeModalContent')); // Replace with the ID or any suitable locator for the modal.

        // Check if the modal is displayed.
        if (await modal.isDisplayed()) {
          // Locate the close button within the modal and click it.
          const closeButton = await modal.findElement(By.className('btn btn-secondary notice-cancel-btn')); // Replace with the ID or any suitable locator for the close button.
          await closeButton.click();
          console.log('Closed the modal.');
        } else {
          console.log('Modal is not displayed.');
        }
        await sleep(5000);
    
    await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[1]/ul/li[6]/a')).click(); 

    // Asana Source
    let asana = await driver.findElement(By.id('asana-connect'));
    await asana.click();

    await driver.findElement(By.xpath("//input[@placeholder='name@company.com']"))
      .sendKeys('farhad@codersbucket.com');
    await driver.findElement(By.xpath("//div[normalize-space()='Continue']")).click();
    await driver.findElement(By.xpath("//input[@name='p']")).sendKeys('Farhad*372RA');
    await driver.findElement(By.xpath("//div[normalize-space()='Log in']")).click();

    await driver.findElement(By.linkText('Add Worklog')).click();

    let wait = await new WebDriverWait(driver, 5000);
    await wait.until(ExpectedConditions.elementToBeClickable(By.id('asana-connected'))).click();

    await driver.findElement(By.id('add_date')).click();
    await driver.findElement(By.xpath('/html/body/div[5]')).click();

    let taskBoardAsana = await new Select(driver.findElement(By.id('task_board')));
    await taskBoardAsana.selectByIndex(0);

    let taskAsana = await new Select(driver.findElement(By.id('task_id')));
    await taskAsana.selectByIndex(0);

    let taskNameAsana = await driver.findElement(By.name('title'));
    await taskNameAsana.sendKeys('None!');

    let customerAsana = await new Select(driver.findElement(By.id('customer_id')));
    await customerAsana.selectByIndex(1);

    let projectAsana = await new Select(driver.findElement(By.id('project_id')));
    await projectAsana.selectByIndex(1);

    let hours_workAsana = await driver.findElement(By.name('hours_worked'));
    await hours_workAsana.sendKeys('2');

    let minutes_workAsana = await driver.findElement(By.name('minutes_worked'));
    await minutes_workAsana.sendKeys('2');

    let descriptionAsana = await driver.findElement(By.id('description'));
    await descriptionAsana.sendKeys('Selenium learning');

    await driver.findElement(By.id('submit_button')).submit();

      }

  catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

main();
