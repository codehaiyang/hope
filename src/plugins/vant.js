import Vue from 'vue'

// 1.Tabbar
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

// 2.NarBar
import { NavBar } from 'vant'
Vue.use(NavBar)

// 3.单元格
import { Cell, CellGroup } from 'vant'
Vue.use(Cell).use(CellGroup)

// 4.宫格
import { Grid, GridItem } from 'vant'
Vue.use(Grid).use(GridItem)