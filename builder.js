var builder = new Vue({
    el: '#builder',
    data: {
        vehicles: vehicles,
        characters: characters,
        tires: tires,
        gliders: gliders,
        test: 'test',
        cmp: { character: null, vehicle: null, tire: null, glider: null },
        builds: [
            { character: null, vehicle: null, tire: null, glider: null },
            { character: null, vehicle: null, tire: null, glider: null },
        ],
        build_i: 0,
    },
    methods: {
        btn_class(obj, piece)  {
            var cls = [ 'btn',  'btn-' + obj.items.length ];
            if (this.builds[this.build_i][piece] === obj) {
                cls.push('selected');
            }
            return cls;
        },
        img_src(bucket, item) {
            return 'img/' + bucket + '/' + item.replace(/ /g, '-').toLowerCase() + '.png';
        },
        select(piece, item) {
            if (this.builds[this.build_i][piece] === item) this.builds[this.build_i][piece] = null;
            else this.builds[this.build_i][piece] = item;
        },
        select_cmp(piece, item) {
            this.cmp[piece] = item;
        },
        unselect_cmp(piece) {
            this.cmp[piece] = null;
        },
        stat(stat) {
            var sum = 0;
            for (piece of [ 'character', 'vehicle', 'tire', 'glider' ]) {
                if (this.builds[this.build_i][piece] != null) {
                    sum += stat in this.builds[this.build_i][piece]
                    ? this.builds[this.build_i][piece][stat]
                    : 0;
                }
            }
            return sum;
        },
        cmpstat(stat) {
            var sum = 0;
            var cmp_sum = 0;
            for (piece of [ 'character', 'vehicle', 'tire', 'glider' ]) {
                if (this.cmp[piece] != null) {
                    cmp_sum += stat in this.cmp[piece] ? this.cmp[piece][stat] : 0;
                }
                else if (this.builds[this.build_i][piece] != null) {
                    cmp_sum += stat in this.builds[this.build_i][piece]
                    ? this.builds[this.build_i][piece][stat]
                    : 0;
                }
                if (this.builds[this.build_i][piece] != null) {
                    sum += stat in this.builds[this.build_i][piece]
                    ? this.builds[this.build_i][piece][stat]
                    : 0;
                }
            }
            return cmp_sum - sum;
        },
        next_build() {
            this.build_i = (this.build_i + 1) % this.builds.length;
        },
        prev_build() {
            this.build_i = (this.build_i - 1 + this.builds.length) % this.builds.length;
        }
    }
});
