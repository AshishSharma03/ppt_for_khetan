import { test, expect } from "@playwright/test";
const url = "http://127.0.0.1:5173";
test('workspace content, media and security panels work across tabs',async({page})=>{
  await page.goto(url);await chapter(page,'Control center');
  const sidebar=page.locator('.dash-layout aside');
  await sidebar.getByRole('button',{name:'Content',exact:true}).click();
  await expect(page.locator('.content-records>button')).toHaveCount(3);
  await page.locator('.content-records>button').first().click();
  await page.getByLabel('Content title',{exact:true}).fill('Updated Ajeya story');
  await page.getByLabel('Content body',{exact:true}).fill('A client-ready catalogue story.');
  await page.getByLabel('Publication status').selectOption('In review');
  await page.getByRole('button',{name:'Save demo changes'}).click();
  await expect(page.getByRole('status')).toContainText('Saved in this workspace demo.');
  await page.getByRole('button',{name:'Preview',exact:true}).click();
  await expect(page.locator('.workspace-article')).toContainText('Updated Ajeya story');
  await sidebar.getByRole('button',{name:'Media',exact:true}).click();
  await expect(page.locator('.workspace-media-grid>button')).toHaveCount(3);
  await page.locator('.workspace-filters').getByRole('button',{name:'Manufacturing',exact:true}).click();
  await expect(page.locator('.workspace-media-grid>button')).toHaveCount(1);
  await page.locator('.workspace-media-grid>button').click();
  await expect(page.locator('.media-detail h4')).toHaveText('Manufacturing overview');
  await expect(page.locator('.watermark-demo')).toBeVisible();
  await page.getByLabel('Show watermark preview').uncheck();
  await expect(page.locator('.watermark-demo')).toHaveCount(0);
  await page.getByLabel('Planned original-file access').selectOption('Authorized team only');
  await expect(page.locator('.preview-chip')).toContainText('Authorized team only');
  await sidebar.getByRole('button',{name:'Content',exact:true}).click();
  await expect(page.locator('.content-records')).toContainText('Updated Ajeya story');
  await sidebar.getByRole('button',{name:'Security',exact:true}).click();
  await page.getByRole('button',{name:'Attack protection',exact:false}).click();
  await expect(page.locator('.security-detail')).toContainText('zero-attack guarantee nahi');
  await page.getByRole('button',{name:'Media & copy deterrence',exact:false}).click();
  await expect(page.locator('.security-detail')).toContainText('fully block nahi');
  await page.setViewportSize({width:390,height:900});
  for(const name of ['Content','Media','Security']){
    await sidebar.getByRole('button',{name,exact:true}).click();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
  }
  await chapter(page,'The complete system');
  await expect(page.getByRole('region',{name:'Proposed website security'})).toBeVisible();
});
test('assistant language switches the full flow and preserves the current step',async({page})=>{
  await page.goto(url);
  await chapter(page,'Smart assistant');
  await page.getByLabel('Assistant language').selectOption('hi');
  await expect(page.getByRole('heading',{name:'नमस्ते। आपका स्वागत है।'})).toBeVisible();
  await page.getByRole('button',{name:'एल्युमिनियम उत्पाद देखें',exact:true}).click();
  await page.getByRole('button',{name:'दरवाज़े और खिड़कियों के सिस्टम',exact:true}).click();
  await expect(page.getByRole('link',{name:'उत्पाद कैटलॉग खोलें'})).toBeVisible();
  await page.getByLabel('Assistant language').selectOption('en');
  await expect(page.locator('.bot-product strong')).toHaveText('Door & window systems');
  await page.getByRole('button',{name:'Request a Callback',exact:true}).click();
  await page.getByLabel('Your name',{exact:true}).fill('Demo Visitor');
  await page.getByLabel('Assistant language').selectOption('hi');
  await expect(page.getByLabel('आपका नाम',{exact:true})).toHaveValue('Demo Visitor');
  await page.getByLabel('फ़ोन नंबर',{exact:true}).fill('9876543210');
  await page.getByLabel('शहर',{exact:true}).fill('Jamshedpur');
  await page.getByRole('checkbox').check();
  await page.getByRole('button',{name:'डेमो कॉल बैक दर्ज करें'}).click();
  await expect(page.getByRole('status')).toContainText('डेमो कॉल बैक दर्ज हो गया।');
  await page.getByRole('button',{name:'कंपनी का पता देखें',exact:true}).click();
  await expect(page.getByRole('link',{name:'Google Maps में खोलें'})).toBeVisible();
  await chapter(page,'The big picture');
  await chapter(page,'Smart assistant');
  await expect(page.getByLabel('Assistant language')).toHaveValue('hi');
  await page.setViewportSize({width:390,height:900});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
});
test('guided editor, visual templates, gallery, locations and assistant',async({page})=>{
  await page.goto(url);
  await chapter(page,'Content & social');
  await expect(page.locator('.blog-editor')).toBeVisible();
  await expect(page.locator('.channel-card').first()).toBeDisabled();
  await page.getByLabel('Blog title',{exact:true}).fill('My Ajeya project story');
  await page.getByLabel('Blog body',{exact:true}).fill('Explore our new architecture collection.');
  await page.getByRole('button',{name:'Publish & distribute'}).click();
  await expect(page.locator('.published-blog')).toContainText('My Ajeya project story');
  await page.locator('.channel-card').filter({hasText:'Instagram'}).click();
  await expect(page.locator('.instagram-caption')).toContainText('My Ajeya project story');
  await expect(page.locator('.instagram-caption')).toContainText('Explore our new architecture collection.');
  await chapter(page,'Business email');
  await expect(page.locator('.template-thumb')).toHaveCount(4);
  for(const [name,layout] of [['Introduction','introduction'],['Greeting','greeting'],['Lead acknowledgement','enquiry'],['Follow-up','followup']]){
    await page.locator('.template-options').getByRole('button',{name,exact:true}).click();
    await expect(page.locator('.designed-email')).toHaveAttribute('data-template-layout',layout);
    await expect(page.locator('.designed-email')).toHaveCSS('opacity','1');
    await page.screenshot({path:`artifacts/email-design-${layout}.png`,fullPage:true});
  }
  await chapter(page,'Website ecosystem');
  await expect(page.locator('.gallery-tiles>button')).toHaveCount(3);
  await page.getByRole('button',{name:'Manufacturing',exact:true}).click();
  await expect(page.locator('.gallery-tiles>button')).toHaveCount(1);
  await page.locator('.gallery-tiles>button').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.locator('.ecosystem-grid').getByRole('button').filter({hasText:'Company locations'}).click();
  await expect(page.locator('.location-info')).toContainText('Adityapur Industrial Area');
  await expect(page.getByRole('link',{name:'Open in Google Maps'})).toHaveAttribute('href',/google.com\/maps\/search/);
  await page.screenshot({path:'artifacts/company-location.png',fullPage:true});
  await chapter(page,'Smart assistant');
  await page.getByRole('button',{name:'View Aluminium Products',exact:true}).click();
  await page.getByRole('button',{name:'Door & window systems',exact:true}).click();
  await expect(page.getByRole('link',{name:'Open product catalogue'})).toBeVisible();
  await page.getByRole('button',{name:'Find Company Location',exact:true}).click();
  await expect(page.locator('.location-info')).toContainText('Jamshedpur');
  await page.getByRole('button',{name:'Request a Callback',exact:true}).click();
  await page.getByLabel('Your name',{exact:true}).fill('Demo Visitor');
  await page.getByLabel('Phone number',{exact:true}).fill('9876543210');
  await page.getByLabel('City',{exact:true}).fill('Jamshedpur');
  await page.getByRole('checkbox').check();
  await page.getByRole('button',{name:'Submit demo callback'}).click();
  await expect(page.getByRole('status')).toContainText('Demo callback captured.');
  await page.getByRole('button',{name:'Restart assistant'}).click();
  await expect(page.locator('.callback-success')).toHaveCount(0);
  await expect(page.getByRole('button',{name:'View Aluminium Products',exact:true})).toBeVisible();
});
test('platform previews, role templates and lead contact details', async ({page}) => {
  await page.goto(url);
  await chapter(page,'Content & social');
  await page.getByRole('button',{name:'Publish & distribute'}).click();
  await expect(page.getByText('Published in demo')).toBeVisible();
  for (const channel of ['LinkedIn','Instagram','Facebook','Email']) {
    await page.locator('.channel-card').filter({hasText:channel}).click();
    await expect(page.getByLabel(channel+' post preview')).toBeVisible();
    await expect(page.locator('.platform-preview .post-architecture')).toBeVisible();
    await expect(page.locator('.platform-preview')).toContainText('Khetan Ajeya');
    if(channel==='Instagram') {
      await page.getByRole('button',{name:'Like Instagram post',exact:true}).click();
      await expect(page.getByText('129 likes')).toBeVisible();
      await page.getByRole('button',{name:'Save Instagram post',exact:true}).click();
      await expect(page.getByRole('button',{name:'Save Instagram post',exact:true})).toHaveAttribute('aria-pressed','true');
    }
    await page.screenshot({path:`artifacts/post-${channel}.png`,fullPage:true});
  }
  await chapter(page,'Business email');
  for(const role of ['Architect','Dealer','Builder','Customer']) {
    await page.getByLabel('01 / CHOOSE RECIPIENT ROLE').selectOption(role);
    for(const template of ['Introduction','Greeting','Lead acknowledgement','Follow-up']) {
      await page.locator('.template-options').getByRole('button',{name:template,exact:true}).click();
      await expect(page.locator('.recipient-context')).toContainText(role);
      await expect(page.locator('.email-top')).toContainText(template.toUpperCase());
      await expect(page.locator('.email-content')).toContainText('Hello');
    }
  }
  await page.getByRole('button',{name:'Simulate scheduled outreach'}).click();
  await expect(page.getByRole('button',{name:'Added to demo sequence'})).toBeDisabled();
  await page.getByLabel('01 / CHOOSE RECIPIENT ROLE').selectOption('Dealer');
  await expect(page.getByRole('button',{name:'Simulate scheduled outreach'})).toBeEnabled();
  await chapter(page,'Control center');
  await page.locator('.dash-layout aside').getByRole('button',{name:'Leads',exact:true}).click();
  await page.getByLabel('Search leads').fill('Surat');
  await expect(page.locator('.lead-record')).toHaveCount(1);
  await page.locator('.lead-record').click();
  await expect(page.locator('.lead-contact-detail')).toContainText('rohan@shahbuild.example');
  await expect(page.locator('.lead-contact-detail')).toContainText('+91 97XXX 24002');
  await expect(page.locator('.lead-contact-detail')).toContainText('Surat, Gujarat');
  await page.getByLabel('Search leads').fill('does-not-exist');
  await expect(page.getByText('No matching leads.',{exact:false})).toBeVisible();
  await page.getByLabel('Search leads').fill('');
  await page.screenshot({path:'artifacts/lead-directory.png',fullPage:true});
  await page.setViewportSize({width:390,height:900});
  for(const name of ['Content & social','Business email','Control center']) {
    await chapter(page,name);
    await expect(page.locator('.slide')).toHaveAttribute('aria-label',name);
    await expect(page.locator('.slide')).toHaveCSS('opacity','1');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
  }
});
async function chapter(page, name) {
  await page.getByRole("button", { name: "Chapters", exact: true }).click();
  await page
    .locator(".chapter-menu")
    .getByRole("button")
    .filter({ hasText: name })
    .click();
  await expect(page.locator(".slide")).toBeVisible();
}
test("all chapters render on desktop and mobile without overflow or runtime errors", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(url);
    for (let i = 0; i < 11; i++) {
      await expect(page.locator(".footer-chapter>span")).toContainText(
        String(i + 1).padStart(2, "0"),
      );
      await expect(page.locator(".slide")).toHaveAttribute("aria-label", ["The big picture","Control center","Customer journey","WhatsApp","Content & social","Business email","Website ecosystem","Analytics","Smart assistant","The complete system","Let’s connect it"][i]);
      await expect(page.locator(".slide")).toHaveCSS("opacity", "1");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
      ).toBeTruthy();
      if (i === 0)
        await page.screenshot({
          path: `artifacts/hero-${width}.png`,
          fullPage: true,
        });
      if (i === 3)
        await page.screenshot({
          path: `artifacts/whatsapp-${width}.png`,
          fullPage: true,
        });
      if (i < 10)
        await page
          .getByRole("button", { name: "Next chapter", exact: true })
          .click();
    }
  }
  expect(errors).toEqual([]);
});
test("interactive customer journey and communication demos", async ({
  page,
}) => {
  await page.goto(url);
  await chapter(page, "Customer journey");
  await page.getByRole("button", { name: "See what happens next" }).click();
  await page.getByLabel("Your name").fill("Anand Kumar");
  await page.getByLabel("Phone number").fill("9876543210");
  await page.getByLabel("Interested in").selectOption("Dealer enquiry");
  await expect(
    page.getByRole("button", { name: "Submit demo enquiry" }),
  ).toBeDisabled();
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Submit demo enquiry" }).click();
  await expect(page.getByText("Anand Kumar", { exact: true })).toBeVisible();
  await expect(page.getByText("Dealer enquiry · QR enquiry")).toBeVisible();
  await page.getByRole("button", { name: "See what happens next" }).click();
  await expect(page.getByText("Hello Anand!", { exact: false })).toBeVisible();
  await page
    .getByRole("button", { name: "View Products", exact: true })
    .click();
  await page.getByRole("button", { name: "Request a sales callback" }).click();
  await expect(
    page.getByText("Callback request captured in this demo.", { exact: false }),
  ).toBeVisible();
  await chapter(page, "Content & social");
  await page.getByRole("button", { name: "Publish & distribute" }).click();
  await expect(page.getByText("Ready in distribution workflow")).toHaveCount(4);
  await chapter(page, "Business email");
  await page
    .getByRole("button", { name: "Simulate scheduled outreach" })
    .click();
  await expect(
    page.getByRole("button", { name: "Added to demo sequence" }),
  ).toBeVisible();
  await chapter(page, "Smart assistant");
  await page
    .getByRole("button", { name: "View Aluminium Products", exact: true })
    .click();
  await expect(
    page.getByText("Explore Khetan aluminium solutions.", {
      exact: false,
    }),
  ).toBeVisible();
});
