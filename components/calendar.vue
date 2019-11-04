<template>
  <div class="calendar calendar-box">
    <div class="calendar-title pt-2 pb-2">
      <span class="pl-4">
        {{ $t('calendar.text') }}
      </span>
    </div>
    <div class="calendar-container pb-4">
      <div class="month ">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <b-button variant="link" @click="printPre({ year, month })">
              <i class="iconfont icon-doubleleft"></i>
            </b-button>
          </li>
          <li class="flex-fill text-center">
            <strong>
              <span>{{ year }}年</span>
              <span>{{ month }}月</span>
              <span>{{ day }}日</span>
            </strong>
          </li>
          <li>
            <b-button variant="link" @click="printNext({ year, month })">
              <i class="iconfont icon-doubleright"></i>
            </b-button>
          </li>
        </ul>
      </div>
      <div class="week">
        <ul class="week-list list-unstyled clearfix ">
          <li
            v-for="(items, index) in weekList"
            :key="index"
            class="float-left text-center"
          >
            <strong>{{ items }}</strong>
          </li>
        </ul>
      </div>
      <div class="day">
        <ul class="day-list list-unstyled clearfix ">
          <li
            v-for="(items, index) in dayList"
            :key="index"
            class="float-left text-center mt-2"
          >
            <span>{{ items }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { parseDate } from '@/utils'
export default {
  data: () => ({
    year: 1970,
    month: 1,
    day: 1,
    week: 1,
    weekList: [],
    dayList: []
  }),
  mounted() {
    this.init()
    this.weekList = ['一', '二', '三', '四', '五', '六', '七']
    const days = []
    let i = 0
    while (i < 35) {
      days.push(i)
      i++
    }
    this.dayList = days
  },
  methods: {
    init(data) {
      const self = this
      const d = data ? new Date(data) : new Date()
      self.year = d.getFullYear()
      self.month = d.getMonth() + 1
      self.day = d.getDate()
    },
    printPre(obj) {
      const { year, month } = obj
      const d = new Date(parseDate(year, month, 1))
      d.setDate(0) // 上个月的最后一天
      this.init(parseDate(d.getFullYear(), d.getMonth() + 1, 1))
    },
    printNext(obj) {
      const { year, month } = obj
      const d = new Date(parseDate(year, month, 1))
      d.setDate(35)
      this.init(parseDate(d.getFullYear(), d.getMonth() + 1, 1))
    }
  }
}
</script>
