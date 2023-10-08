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
        mode: 'builder',
        crit: {
            miniturbo: 'any',
            speedGnd: 'any',
            speedWtr: 'any',
            speedAir: 'any',
            speedGty: 'any',
            acceleration: 'any',
            weight: 'any',
            handlingGnd: 'any',
            handlingWtr: 'any',
            handlingAir: 'any',
            handlingGty: 'any',
            grip: 'any',
            invincibility: 'any',
        },
        crit_val: {},
        matching: [],
    },
    mounted() {
        new Clipboard('.share').on('success', function(e) {
            document.querySelector('.share-msg').className += ' shown';
            setTimeout(function() {
                document.querySelector('.share-msg').className = 'share-msg';
            }, 3000);
        });;
        this.restore_from_hash();
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
            this.make_url();
        },
        select_build(build) {
            this.builds[this.build_i].character = build.character;
            this.builds[this.build_i].vehicle = build.vehicle;
            this.builds[this.build_i].tire = build.tire;
            this.builds[this.build_i].glider = build.glider;
            this.mode = 'builder';
            this.make_url();
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
        },
        make_url() {
            return document.location.protocol + '//'
            + document.location.hostname
            + document.location.pathname
            + '?' + this.builds
            .filter((build) => build.character || build.vehicle || build.tire || build.glider)
            .map((build) =>
                (build.character ? build.character.id : 'any')
                + '-' + (build.vehicle ? build.vehicle.id : 'any')
                + '-' + (build.tire ? build.tire.id : 'any')
                + '-' + (build.glider ? build.glider.id : 'any')
            ).join(':');
        },
        restore_from_hash() {
            var items = [ this.characters, this.vehicles, this.tires, this.gliders ];
            const pieces = ['character', 'vehicle', 'tire', 'glider']
            var hash_builds = document.location.search.substr(1).split(':');
            for (var build_i = 0; build_i < hash_builds.length; build_i++) {
                var sel = hash_builds[build_i].split('-')
                for (var i = 0; i < 4; i++) {
                    if (sel[i] === 'any') continue;
                    this.builds[build_i][pieces[i]] = items[i].find((v) => v.id === sel[i]);
                }
            }
        },
        search() {
            var builds = [];
            var crit = [];
            for (var key in this.crit) {
                if (this.crit[key] !== 'any') {
                    crit.push({ key: key, val: Number.parseFloat(this.crit_val[key]), cmp: this.crit[key] });
                }
            }
            for (var c of characters) {
                for (var v of vehicles) {
                    for (var t of tires) {
                        for (var g of gliders) {
                            var build = {
                                miniturbo: 0,
                                speedGnd: 0,
                                speedWtr: 0,
                                speedAir: 0,
                                speedGty: 0,
                                acceleration: 0,
                                weight: 0,
                                handlingGnd: 0,
                                handlingWtr: 0,
                                handlingAir: 0,
                                handlingGty: 0,
                                grip: 0,
                                invincibility: 0,
                            };
                            for (var key in this.crit) {
                                if (key in c) build[key] += c[key];
                                if (key in v) build[key] += v[key];
                                if (key in t) build[key] += t[key];
                                if (key in g) build[key] += g[key];
                            }
                            var matches = true;
                            for (var cr of crit) {
                                if (cr.cmp === 'eq') {
                                    if (build[cr.key] !== cr.val) matches = false;
                                }
                                if (cr.cmp === 'lt') {
                                    if (build[cr.key] > cr.val) matches = false;
                                }
                                if (cr.cmp === 'gt') {
                                    if (build[cr.key] < cr.val) matches = false;
                                }
                            }
                            if (matches) {
                                builds.push({ character: c, vehicle: v, tire: t, glider: g });
                            }
                        }
                    }
                }
            }
            this.matching = builds.slice(0, 10);
        }
    }
});
