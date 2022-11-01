const puppeteer=require("puppeteer")
// let cheerio=require("puppeteer")

async function main(){
    console.log('automation start');
    const browser=await puppeteer.launch({headless:false,defaultViewport:null})
    const page= (await browser.pages())[0]
    await page.goto("https://sts.karnataka.gov.in/SATS/main.htm?actionCode=loadIndexPage#")
    // await page.waitForSelector("#menu > li:nth-child(7) > a")
    // let a=await page.$("#menu > li:nth-child(7) > a")
    // console.log('element',a);
    // await page.setViewport({width:1000,height:600})
    await page.click("#menu > li:nth-child(7) > a")
    // // await page.setDefaultTimeout(0)
    await page.waitForSelector("input[type='text']#userName")
    await page.type("input[type='text']#userName","SHIGGAONBRC",{delay:50})
    await page.waitForSelector("input[type='password']")
    await page.type("input[type='password']","Moon@123",{delay:50})
    
    await page.waitForSelector("#randomfield")
    let captcha=await page.$eval("#randomfield",e=>e.innerText)
    console.log('tex',captcha);
    await page.waitForSelector("#txtcode")
    await page.type("#txtcode",captcha,{delay:50})
    await page.waitForSelector("#xmlLogin")
    await page.click("#xmlLogin")

    // For clicking on dashboard

    await page.waitForSelector("#cssmenu > li:nth-child(1) > a")
    await page.click("#cssmenu > li:nth-child(1) > a")

    // child(1) baad cluster clusters
    await page.waitForSelector("#allchilds > tbody > tr:nth-child(8)")
    await page.click("#allchilds > tbody > tr:nth-child(8)")
    
    // to get all schools "select all from drop down in ui"
    await page.waitForSelector("#allchilds_length > label > select")
    let sel=await page.$("#allchilds_length > label > select" )
 
    await sel.select("-1")
    

    // child(1) fisrst school
    // all schools --> #allchilds > tbody> tr > td.sorting_1
    let allSchools=Array.from(await page.$$("#allchilds > tbody> tr > td.sorting_1"))
    for (let i = 1; i <=allSchools.length; i++) {
        // let i=1
            console.log('iterate',i);
        if(i>10){
            let sel=await page.$("#allchilds_length > label > select" )
            await sel.select("-1")
        }
        // button to open shcool details
        // await page.waitForNavigation({waitUntil:"domcontentloaded"})
        await page.waitForSelector(`#allchilds > tbody > tr:nth-child(${i}) > td.sorting_1`)
        await page.click(`#allchilds > tbody > tr:nth-child(${i}) > td.sorting_1` )
         // button to open download page
        let res =await page.waitForNavigation({waitUntil:"domcontentloaded"})
        
        await page.waitForSelector("#searchschool > tbody > tr:last-child > td:nth-child(4) > a")
        await page.click("#searchschool > tbody > tr:last-child > td:nth-child(4) > a")
        await res;
        console.log('iterate done');
        // back button
        await page.waitForSelector("#frmSearchStudent > table:nth-child(21) > tbody > tr > td > table > tbody > tr > td:nth-child(1) > a",{timeout:0})
        await page.click("#frmSearchStudent > table:nth-child(21) > tbody > tr > td > table > tbody > tr > td:nth-child(1) > a")
        await page.goBack({waitUntil:"domcontentloaded"})
            // let newpage= (await browser.pages()).length
            // console.log('pages ,i',newpage,i);
        
        let res1 =await page.waitForNavigation({waitUntil:"domcontentloaded"})
        let newpage= (await browser.pages())[1]
        let len=( await browser.pages()).length
        console.log('length',len);
        await res1
        
        
        // below is download link
        
        let res2 =await page.waitForNavigation({waitUntil:"domcontentloaded"})
        await newpage.waitForSelector("#maincontent > table:nth-child(28) > tbody > tr > td > a:nth-child(2) > b")
    await newpage.click("#maincontent > table:nth-child(28) > tbody > tr > td > a:nth-child(2) > b")
    
    await newpage.close()
}
}
main()
