import {test, expect} from "@playwright/test"


test(" devloping the login page wiith github 3",async({page})=>{


await page.goto("https://www.amazon.in/");
await expect(page).toHaveTitle("amazon");

})