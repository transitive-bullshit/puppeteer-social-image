import { compileImageTemplate } from "../helpers";

export default ({ templateParams, styles, ...params }) => {
  return compileImageTemplate({
    ...params,
    body: `
      <div class="Content">
        <div class="Content-inner">
          <div class="logo">
            <div class="logo-inner">
              {{#if logo}}<img src="{{logo}}" />{{/if}}
            </div>
          </div>

          <div class="Content-body">
            {{#if eyebrow}}<div class="Eyebrow">{{{eyebrow}}}</div>{{/if}}
            <h1><strong>{{{title}}}</strong></h1>
            {{#if subtitle}}<h2>{{{subtitle}}}</h2>{{/if}}
          </div>

          <div class="Content-watermark">
            {{#if watermark}}
              <div class="Content-watermarkInner">
                {{{watermark}}}
              </div>
            {{/if}}
          </div>
        </div>
      </div>
    `,
    styles: `
      .Content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .Content-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        padding: 48px;
      }

      .Eyebrow {
        font-size: 22px;
        font-weight: 300;
        margin-bottom: 8px;
      }

      .Content-watermark {
        display: flex;
        height: 100%;
      }

      .Content-watermarkInner {
        border-top: 1px solid lightgrey;
        font-size: 32px;
        align-self: flex-end;
        opacity: 0.8;
        width: 100%;
        padding-top: 32px;
      }

      .logo {
        height: 100%;
      }

      .logo img {
        height: 100px;
        padding-bottom: 16px;
      }

      h1,
      h2 {
        margin: 0;
        padding: 0;
        line-height: 1.2;
        margin-bottom: 0.3em;
      }

      h1 {
        font-size: 96px;
        font-weight: 700;
        margin-bottom: 0.3em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      h2 {
        font-size: 40px;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      ${styles}
    `,
    templateParams
  });
};
