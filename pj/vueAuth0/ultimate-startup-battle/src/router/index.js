import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PublicBattles from "@/components/publicBattles";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "PublicBattles",
      component: PublicBattles
    }
  ]
});
