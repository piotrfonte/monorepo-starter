import React from 'react';

import { HelloWorldView } from '@monorepo/app';
// import { data } from "./data";

export default {
  title: 'App/HelloWorldView',
  component: HelloWorldView,
};

const HelloWorldTpl = (args) => (
  <div style={{ height: '100vh' }}>
    <HelloWorldView
      // {...data}
      {...args}
    />
  </div>
);

export const HelloWorld = HelloWorldTpl.bind({});
HelloWorld.args = {};
