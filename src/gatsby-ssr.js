import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    let cntrDataInject = "";
    if (pluginOptions.cntrData !== undefined) {
      cntrDataInject = `var cntrData = JSON.parse('${JSON.stringify(pluginOptions.cntrData)}');`
    }
    return setHeadComponents([
      <script src="https://cdn01.basis.net/assets/up.js?um=0"></script>,
      <script
        key={`gatsby-plugin-dsp-universal-pixel`}
        dangerouslySetInnerHTML={{
          __html: `
          ${cntrDataInject && cntrDataInject}
          cntrUpTag.track('cntrData', '${pluginOptions.id}');
      `,
        }}
      />,
    ]);
  }
};
