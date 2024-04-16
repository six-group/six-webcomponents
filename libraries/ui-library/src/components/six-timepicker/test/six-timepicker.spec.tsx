import { newSpecPage } from '@stencil/core/testing';
import { SixTimepicker } from '../six-timepicker';

describe('six-timepicker', () => {
  it('should render default timepicker', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker></six-timepicker>`,
    };

    // when initially loaded
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-timepicker>
    <mock:shadow-root>
      <div class="timepicker__container" part="container">
        <six-input class="input--empty" errortext="" label="" part="input" size="medium" value="">
          <span class="prefix" part="icon" slot="prefix">
            <six-icon size="medium">
              watch_later
            </six-icon>
          </span>
        </six-input>
      </div>
    </mock:shadow-root>
  </six-timepicker>
   `);

    // when setting a value and opening the popup
    if (page.root?.shadowRoot != null) {
      page.root.value = '20:00:00';
      page.root.shadowRoot.querySelector('six-input')?.click();
    }
    await page.waitForChanges();

    // then expect the correct time to be rendered
    expect(page.root).toEqualHtml(`
<six-timepicker open="">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input errortext="" label="" part="input" size="medium" value="20:00:00">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
      <div class="timepicker__popup timepicker__popup__sizing" part="popup">
        <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="0"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="0"></six-item-picker>
      </div>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render open timepicker', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open value="13:20:59"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-timepicker open="" value="13:20:59">
      <mock:shadow-root>
        <div class="timepicker__container" part="container">
          <six-input errortext="" label="" part="input" size="medium" value="13:20:59">
            <span class="prefix" part="icon" slot="prefix">
              <six-icon size="medium">
                watch_later
              </six-icon>
            </span>
          </six-input>
          <div class="timepicker__popup timepicker__popup__sizing" part="popup">
            <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="13"></six-item-picker>
            <div class="timepicker__separator">
              <span>
                :
              </span>
            </div>
            <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
            <div class="timepicker__separator">
              <span>
                :
              </span>
            </div>
            <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="59"></six-item-picker>
          </div>
        </div>
      </mock:shadow-root>
    </six-timepicker>
   `);
  });

  it('should render inline timepicker', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker inline value="13:20:59"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-timepicker inline="" open="" value="13:20:59">
    <mock:shadow-root>
      <div class="timepicker__container" part="container">
        <six-input class="input--hide" errortext="" label="" part="input" size="medium" value="13:20:59">
          <span class="prefix" part="icon" slot="prefix">
            <six-icon size="medium">
              watch_later
            </six-icon>
          </span>
        </six-input>
        <div class="timepicker__popup timepicker__popup__sizing timepicker__popup--is-inline" part="popup">
          <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="13"></six-item-picker>
          <div class="timepicker__separator">
            <span>
              :
            </span>
          </div>
          <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
          <div class="timepicker__separator">
            <span>
              :
            </span>
          </div>
          <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="59"></six-item-picker>
        </div>
      </div>
    </mock:shadow-root>
  </six-timepicker>
   `);
  });

  it('should render open timepicker with default time', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open default-time="13:20:59"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-timepicker default-time="13:20:59" open="">
    <mock:shadow-root>
      <div class="timepicker__container" part="container">
        <six-input class="input--empty" errortext="" label="" part="input" size="medium" value="">
          <span class="prefix" part="icon" slot="prefix">
            <six-icon size="medium">
              watch_later
            </six-icon>
          </span>
        </six-input>
        <div class="timepicker__popup timepicker__popup__sizing" part="popup">
          <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="13"></six-item-picker>
          <div class="timepicker__separator">
            <span>
              :
            </span>
          </div>
          <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
          <div class="timepicker__separator">
            <span>
              :
            </span>
          </div>
          <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="59"></six-item-picker>
        </div>
      </div>
    </mock:shadow-root>
  </six-timepicker>
   `);
  });

  it('should render timepicker with different separator', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open value="11:59:20" separator="-"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
    <six-timepicker open="" separator="-" value="11:59:20">
      <mock:shadow-root>
        <div class="timepicker__container" part="container">
          <six-input errortext="" label="" part="input" size="medium" value="11:59:20">
            <span class="prefix" part="icon" slot="prefix">
              <six-icon size="medium">
                watch_later
              </six-icon>
            </span>
          </six-input>
          <div class="timepicker__popup timepicker__popup__sizing" part="popup">
            <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="11"></six-item-picker>
            <div class="timepicker__separator">
              <span>
                -
              </span>
            </div>
            <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="59"></six-item-picker>
            <div class="timepicker__separator">
              <span>
                -
              </span>
            </div>
            <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
          </div>
        </div>
      </mock:shadow-root>
    </six-timepicker>
   `);
  });

  it('should render timepicker with different format', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open value="03:45:20:PM" format="hh:mm:ss:aa"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker format="hh:mm:ss:aa" open="" value="03:45:20:PM">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input errortext="" label="" part="input" size="medium" value="03:45:20:PM">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
      <div class="timepicker__popup timepicker__popup__sizing" part="popup">
        <six-item-picker interval="35" max="11" min="0" padded="" timeout="300" type="number" value="3"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="45"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
        <six-item-picker interval="35" padded="" timeout="300" type="custom" value="PM"></six-item-picker>
      </div>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render timepicker with adjusted timeout and interval', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open value="13:20:59" timeout="500" interval="150"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker interval="150" open="" timeout="500" value="13:20:59">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input errortext="" label="" part="input" size="medium" value="13:20:59">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
      <div class="timepicker__popup timepicker__popup__sizing" part="popup">
        <six-item-picker interval="150" max="23" min="0" padded="" timeout="500" type="number" value="13"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="150" max="59" min="0" padded="" timeout="500" type="number" value="20"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="150" max="59" min="0" padded="" timeout="500" type="number" value="59"></six-item-picker>
      </div>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render timepicker with placeholder', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker placeholder="HH:mm:ss"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker placeholder="HH:mm:ss">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input class="input--empty" errortext="" label="" part="input" placeholder="HH:mm:ss" size="medium" value="">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render readonly timepicker', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker value="02:00:00" readonly></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker readonly="" value="02:00:00">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input errortext="" label="" part="input" readonly="" size="medium" value="02:00:00">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render disabled timepicker', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker value="02:00:00" disabled></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker disabled="" value="02:00:00">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input disabled="" errortext="" label="" part="input" size="medium" value="02:00:00">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render timepicker in correct sizes', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker size="small"></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker size="small">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input class="input--empty" errortext="" label="" part="input" size="small" value="">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="small">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);

    // when changing size
    if (page.root != null) {
      page.root.size = 'medium';
    }
    await page.waitForChanges();

    // then expect medium sized timepicker
    expect(page.root).toEqualHtml(`
<six-timepicker size="small">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input class="input--empty" errortext="" label="" part="input" size="medium" value="">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);

    // when changing size
    if (page.root != null) {
      page.root.size = 'large';
    }
    await page.waitForChanges();

    // then expect medium sized timepicker
    expect(page.root).toEqualHtml(`
<six-timepicker size="small">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input class="input--empty" errortext="" label="" part="input" size="large" value="">
        <span class="prefix" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
      </six-input>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });

  it('should render open timepicker with icon on the right', async () => {
    // given
    const config = {
      components: [SixTimepicker],
      html: `<six-timepicker open value="13:20:59" icon-position="right" clearable></six-timepicker>`,
    };

    // when
    const page = await newSpecPage(config);

    // then
    expect(page.root).toEqualHtml(`
<six-timepicker clearable="" icon-position="right" open="" value="13:20:59">
  <mock:shadow-root>
    <div class="timepicker__container" part="container">
      <six-input errortext="" label="" part="input" size="medium" value="13:20:59">
        <span class="prefix prefix--right" part="icon" slot="prefix">
          <six-icon size="medium">
            watch_later
          </six-icon>
        </span>
        <button class="timepicker_clear timepicker_clear--left" slot="suffix" tabindex="-1" type="button">
          <six-icon size="small">
            clear
          </six-icon>
        </button>
      </six-input>
      <div class="timepicker__popup timepicker__popup__sizing" part="popup">
        <six-item-picker interval="35" max="23" min="0" padded="" timeout="300" type="number" value="13"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="20"></six-item-picker>
        <div class="timepicker__separator">
          <span>
            :
          </span>
        </div>
        <six-item-picker interval="35" max="59" min="0" padded="" timeout="300" type="number" value="59"></six-item-picker>
      </div>
    </div>
  </mock:shadow-root>
</six-timepicker>
   `);
  });
});
