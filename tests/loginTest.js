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

    await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[1]/ul/li[6]/a')).click(); 

    // Trello Source
    await driver.findElement(By.linkText('Connected Apps')).click();

    let trello = await driver.findElement(By.id('trello-connect'));
    await trello.click();

    let winHandleBefore = await driver.getWindowHandle();
    let handles = await driver.getAllWindowHandles();
    for (let handle of handles) {
      await driver.switchTo().window(handle);
    }

    await driver.manage().window().maximize();
    await sleep(2000);
    await driver.findElement(By.linkText('Log in')).click();
    await sleep(2000);
    await driver.findElement(By.name('user')).sendKeys('farhad@codersbucket.com');
    await sleep(2000);
    await driver.findElement(By.id('login')).click();
    await sleep(2000);
    await driver.findElement(By.name('password')).sendKeys('Farhad*372RA');
    await driver.findElement(By.id('login-submit')).click();
    await sleep(3000);
    await driver.manage().window().maximize();
    await sleep(3000);
    let js =  await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    await sleep(3000);
    await driver.findElement(By.id('approveButton')).click();
    await sleep(3000);
    await driver.switchTo().window(winHandleBefore);
    await driver.findElement(By.linkText('Add Worklog')).click();
    await sleep(2000);
    let trello1 = await driver.findElement(By.id('trello-connected'));
    await trello1.click();
    await sleep(5000);

    let trello2 = await driver.findElement(By.id('trello-connected'));
    await trello2.click();
    await sleep(5000);
    
    // Find the dropdown element by its ID
    const boardDropdown = await driver.findElement(By.id('task_board'));

    // Execute JavaScript to open the dropdown
    await driver.executeScript("arguments[0].style.display='block';", boardDropdown);

    // Find the option you want to select by its value (you can change the value)
    const boardOptionValue = '5e27ca1e6f2c485534635625'; // Replace with the value you want to select
    const boardOption = await driver.findElement(By.css(`#task_board option[value="${boardOptionValue}"]`));
    // Click the option to select it
    await boardOption.click();
    await sleep(10000);
    
/* I"VE COMPLETED BOARD AND NEED TO FIX FOR TASK SELECTION BELOW */

        // Find the dropdown element by its ID
        const dropdown = await driver.findElement(By.id('task_selector'));
        const dropdown = await driver.findElement(By.id('task_selector'));

        // Scroll the element into view
        await driver.executeScript("arguments[0].scrollIntoView();", dropdown);
    
        // Click the dropdown to open it
        await dropdown.click();
    
        // Find the option you want to select by its value (you can change the value)
        const optionValue = '61076c498aa4db2f87eade52'; // Replace with the value you want to select
        const option = await driver.findElement(By.css(`#task_selector option[value="${optionValue}"]`));
    
        // Click the option to select it
        await option.click();

    
        // Select a Customer (you can adjust the index based on your options)
        const selectCustomer = await driver.findElement(By.id('customer_id'));
        await selectCustomer.click();
        const customerOption = await driver.findElement(By.css('#customer_id option:nth-child(2)'));
        await customerOption.click();
    
        // Select a Project (you can adjust the index based on your options)
        const selectProject = await driver.findElement(By.id('project_id'));
        await selectProject.click();
        const projectOption = await driver.findElement(By.css('#project_id option:nth-child(2)'));
        await projectOption.click();
    
        // Fill in the Hours and Minutes fields
        const hoursField = await driver.findElement(By.id('hours_worked'));
        await hoursField.sendKeys('2');
    
        const minutesField = await driver.findElement(By.id('minutes_worked'));
        await minutesField.sendKeys('30'); // Adjust the minutes as needed
    
        // Fill in the Description field
        const descriptionField = await driver.findElement(By.id('description'));
        await descriptionField.sendKeys('Selenium automation');
    
    // await driver.findElement(By.id('add_date')).click();
    // await sleep(15000);
    // const element = await driver.wait(until.elementLocated(By.xpath("/html/body/div[6]/div[1]/table/tbody/tr[3]/td[3]")), 15000); // Adjust the timeout as needed
    // // await element.click();
    // let taskBoardTrello = await new Select(driver.findElement(By.id('select2-task_board-container'))).click();
    // await taskBoardTrello.selectByIndex(1);
    // let taskTrello = await new Select(driver.findElement(By.id('task_id')));
    // await taskTrello.selectByIndex(1);

    // let taskNameTrello = await driver.findElement(By.name('title'));
    // await taskNameTrello.sendKeys('HelloHRM - Employee profile design update');

    // let customerTrello = await new Select(driver.findElement(By.id('customer_id')));
    // await customerTrello.selectByIndex(1);

    // let projectTrello = await new Select(driver.findElement(By.id('project_id')));
    // await projectTrello.selectByIndex(1);

    // let hours_workTrello = await driver.findElement(By.name('hours_worked'));
    // await hours_workTrello.sendKeys('2');

    // let minutes_workTrello = await driver.findElement(By.name('minutes_worked'));
    // await minutes_workTrello.sendKeys('2');

    // let descriptionTrello = await driver.findElement(By.id('description'));
    // await descriptionTrello.sendKeys('Selenium learning');

    // await driver.findElement(By.id('submit_button')).submit();

    // // Asana Source
    // let asana = await driver.findElement(By.id('asana-connect'));
    // await asana.click();

    // await driver.findElement(By.xpath("//input[@placeholder='name@company.com']"))
    //   .sendKeys('farhad@codersbucket.com');
    // await driver.findElement(By.xpath("//div[normalize-space()='Continue']")).click();
    // await driver.findElement(By.xpath("//input[@name='p']")).sendKeys('Farhad*372RA');
    // await driver.findElement(By.xpath("//div[normalize-space()='Log in']")).click();

    // await driver.findElement(By.linkText('Add Worklog')).click();

    // let wait = await new WebDriverWait(driver, 5000);
    // await wait.until(ExpectedConditions.elementToBeClickable(By.id('asana-connected'))).click();

    // await driver.findElement(By.id('add_date')).click();
    // await driver.findElement(By.xpath('/html/body/div[5]')).click();

    // let taskBoardAsana = await new Select(driver.findElement(By.id('task_board')));
    // await taskBoardAsana.selectByIndex(0);

    // let taskAsana = await new Select(driver.findElement(By.id('task_id')));
    // await taskAsana.selectByIndex(0);

    // let taskNameAsana = await driver.findElement(By.name('title'));
    // await taskNameAsana.sendKeys('None!');

    // let customerAsana = await new Select(driver.findElement(By.id('customer_id')));
    // await customerAsana.selectByIndex(1);

    // let projectAsana = await new Select(driver.findElement(By.id('project_id')));
    // await projectAsana.selectByIndex(1);

    // let hours_workAsana = await driver.findElement(By.name('hours_worked'));
    // await hours_workAsana.sendKeys('2');

    // let minutes_workAsana = await driver.findElement(By.name('minutes_worked'));
    // await minutes_workAsana.sendKeys('2');

    // let descriptionAsana = await driver.findElement(By.id('description'));
    // await descriptionAsana.sendKeys('Selenium learning');

    // await driver.findElement(By.id('submit_button')).submit();

    // // Others Source
    // await driver.findElement(By.id('others-connected')).click();
    // await driver.findElement(By.id('add_date')).click();
    // await driver.findElement(By.xpath('/html/body/div[5]')).click();

    // let taskNameOthers = await driver.findElement(By.name('title'));
    // await taskNameOthers.sendKeys('Selenium learning');

    // let customerOthers = await new Select(driver.findElement(By.id('customer_id')));
    // await customerOthers.selectByIndex(1);

    // let projectOthers = await new Select(driver.findElement(By.id('project_id')));
    // await projectOthers.selectByIndex(1);

    // let hours_workOthers = await driver.findElement(By.name('hours_worked'));
    // await hours_workOthers.sendKeys('2');

    // let minutes_workOthers = await driver.findElement(By.name('minutes_worked'));
    // await minutes_workOthers.sendKeys('2');

    // let descriptionOthers = await driver.findElement(By.id('description'));
    // await descriptionOthers.sendKeys('Selenium learning');

    // await driver.findElement(By.id('submit_button')).submit();
      }

  catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

main();
