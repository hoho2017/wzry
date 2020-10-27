import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{},
  dva:{}
  // layout:{},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
});
