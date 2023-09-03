Vue.component('stat-bar', {
    template: /*html*/`
        <div class="stat">
            <p>
                {{ label }}
                <span :class="stat_num_cls(value)">{{ fmt(value) }}</span>
                <span :class="stat_num_cls(cmp)" v-if="cmp !== 0">{{ fmt(cmp) }}</span>
            </p>
            <div class="stat-bar">
                <div class="meter" :style="meter_style()"></div>
                <div :class="cmp_meter_cls()" :style="cmp_style()"></div>
                <div class="mark mark-1"></div>
                <div class="mark mark-2"></div>
                <div class="mark mark-3"></div>
                <div class="mark mark-4"></div>
                <div class="mark mark-5"></div>
            </div>
        </div>
    `,
    props: [ 'value', 'cmp', 'label' ],
    methods: {
        fmt(v) {
            var v_s = v.toString();
            if (v_s.match(/\.5$/)) return v_s + '0';
            if (v_s.match(/\.[27]5$/)) return v_s;
            return v_s + '.00'
        },
        cmp_style() {
            var cmp_style = {
                width: (Math.abs(this.cmp) / 6) * 100 + '%',
            }
            if (this.cmp > 0) {
                cmp_style.left = (this.value / 6) * 100 + '%'
            }
            else if (this.cmp < 0) {
                cmp_style.right = (100 - (this.value / 6) * 100) + '%'
            }
            return cmp_style;
        },
        stat_num_cls(v) {
            return [ 'stat-num', v < 0 ? 'negative' : 'positive' ];
        },
        cmp_meter_cls() {
            return [ 'cmp-meter', this.cmp < 0 ? 'negative' : 'positive' ];
        },
        meter_style() {
            return {
                width: (this.value / 6) * 100 + '%'
            }
        }
    }
});