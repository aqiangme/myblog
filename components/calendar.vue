<template>
  <div class="calendar calendar-box">
    <div class="calendar-title pt-2 pb-2">
      <span class="pl-4">
        万年历
      </span>
    </div>
    <div class="calendar-container">
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
    </div>
  </div>
</template>

<script>
import { parseDate } from '@/utils'
export default {
  data: () => ({
    year: 1970,
    month: 1,
    day: 1
  }),
  mounted() {
    this.init()
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
      d.setDate(32)
      this.init(parseDate(d.getFullYear(), d.getMonth() + 1, 1))
    }
  }
}
</script>
