import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script src="https://cdn01.basis.net/assets/up.js?um=0"></script>,
      <script
        key={`gatsby-plugin-dsp-universal-pixel`}
        dangerouslySetInnerHTML={{
          __html: `
          if(${pluginOptions.cntrData !== undefined}){ var cntrData = JSON.parse('${JSON.stringify(pluginOptions.cntrData)}')}
          cntrUpTag.track('cntrData', '${pluginOptions.id}');
      `,
        }}
      />,
    ]);
  }
};
