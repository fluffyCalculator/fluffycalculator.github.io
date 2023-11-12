(this["webpackJsonptypescript-fluffy"] = this["webpackJsonptypescript-fluffy"] || []).push([
    [0],
    {
        41: function (e, t, n) {},
        42: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(0),
                a = n(1),
                i = n.n(a),
                s = n(21),
                o = n.n(s),
                l = n(15),
                c = n(3),
                u = n(5),
                d = n(2),
                h = {
                    minDamage: {
                        description: function (e) {
                            return "Trimp min damage reduced by " + p(100 * this.getMult(e)) + "% (additive).";
                        },
                        getMult: function (e) {
                            return 0.1 + 0.01 * (e - 1);
                        },
                        getWeight: function (e) {
                            return 1 / ((1 - this.getMult(e) + 1.2) / 2 / 1.1) - 1;
                        },
                        minMaxStep: [41, 90, 1],
                        chance: 1,
                    },
                    maxDamage: {
                        description: function (e) {
                            return "Trimp max damage increased by " + p(100 * this.getMult(e)) + "% (additive).";
                        },
                        getMult: function (e) {
                            return e;
                        },
                        getWeight: function (e) {
                            return 1 - (1.2 + (1 + e)) / 2 / 1.1;
                        },
                        minMaxStep: [1, 5, 0.25],
                        chance: 1,
                    },
                    plague: {
                        description: function (e) {
                            return "Enemies stack a debuff with each attack, damaging Trimps for " + p(100 * this.getMult(e, 1)) + "% of total health per turn per stack, resets on Trimp death.";
                        },
                        getMult: function (e, t) {
                            return 0.01 * e * t;
                        },
                        getWeight: function (e) {
                            var t = Math.ceil((1 + Math.sqrt(1 + 800 / e)) / 2);
                            return (6 - 0.1 * t + 0.8 / t + e / 8) / 1.75;
                        },
                        minMaxStep: [1, 10, 1],
                        chance: 0.3,
                        icon: "*bug2",
                        incompatible: ["rampage", "weakness"],
                        stackDesc: function (e, t) {
                            return "Your Trimps are taking " + p(100 * this.getMult(e, t)) + "% damage after each attack.";
                        },
                    },
                    weakness: {
                        description: function (e) {
                            return "Enemies stack a debuff with each attack, reducing Trimp attack by " + p(100 - 100 * this.getMult(e, 1)) + "% per stack. Stacks cap at 9 and reset on Trimp death.";
                        },
                        getMult: function (e, t) {
                            return 1 - 0.01 * e * t;
                        },
                        getWeight: function (e) {
                            return e / 4;
                        },
                        minMaxStep: [1, 10, 1],
                        chance: 0.6,
                        icon: "fire",
                        incompatible: ["bogged", "plague"],
                        stackDesc: function (e, t) {
                            return "Your Trimps have " + p(100 - 100 * this.getMult(e, t)) + "% less attack.";
                        },
                    },
                    large: {
                        description: function (e) {
                            return "All housing can store " + p(100 - 100 * this.getMult(e)) + "% fewer Trimps";
                        },
                        getMult: function (e) {
                            return 1 - 0.01 * e;
                        },
                        getWeight: function (e) {
                            return 2 * (1 / this.getMult(e) - 1);
                        },
                        minMaxStep: [10, 60, 1],
                        chance: 1,
                    },
                    dedication: {
                        description: function (e) {
                            return "Gain " + p(100 * this.getMult(e) - 100) + "% more resources from gathering";
                        },
                        getMult: function (e) {
                            return 1 + 0.1 * e;
                        },
                        getWeight: function (e) {
                            return 0.075 * e * -1;
                        },
                        incompatible: ["famine"],
                        minMaxStep: [5, 40, 1],
                        chance: 0.75,
                    },
                    famine: {
                        description: function (e) {
                            return "Gain " + p(100 - 100 * this.getMult(e)) + "% less Metal, Food, Wood, and Gems from all sources";
                        },
                        getMult: function (e) {
                            return 1 - 0.01 * e;
                        },
                        getWeight: function (e) {
                            return (1 / this.getMult(e) - 1) / 2;
                        },
                        incompatible: ["dedication"],
                        minMaxStep: [40, 80, 1],
                        chance: 2,
                    },
                    badStrength: {
                        description: function (e) {
                            return "Enemy attack increased by " + p(100 * this.getMult(e) - 100) + "%.";
                        },
                        getMult: function (e) {
                            return 1 + 0.2 * e;
                        },
                        getWeight: function (e) {
                            return 0.1 * e;
                        },
                        minMaxStep: [5, 15, 1],
                        chance: 1,
                    },
                    badHealth: {
                        description: function (e) {
                            return "Enemy health increased by " + p(100 * this.getMult(e) - 100) + "%.";
                        },
                        getMult: function (e) {
                            return 1 + 0.2 * e;
                        },
                        getWeight: function (e) {
                            return 0.2 * e;
                        },
                        minMaxStep: [3, 15, 1],
                        chance: 1,
                    },
                    badMapStrength: {
                        description: function (e) {
                            return "Enemy attack in maps increased by " + p(100 * this.getMult(e) - 100) + "%.";
                        },
                        getMult: function (e) {
                            return 1 + 0.3 * e;
                        },
                        getWeight: function (e) {
                            return 0.1 * (1 + 1 / 3) * e;
                        },
                        minMaxStep: [3, 15, 1],
                        chance: 1,
                    },
                    badMapHealth: {
                        description: function (e) {
                            return "Enemy health in maps increased by " + p(100 * this.getMult(e) - 100) + "%.";
                        },
                        getMult: function (e) {
                            return 1 + 0.3 * e;
                        },
                        getWeight: function (e) {
                            return 0.3 * e * (5 / 8);
                        },
                        minMaxStep: [3, 10, 1],
                        chance: 1,
                    },
                    crits: {
                        description: function (e) {
                            return "Enemies have a 25% chance to crit for " + p(100 * this.getMult(e)) + "% of normal damage.";
                        },
                        getMult: function (e) {
                            return 1 + 0.5 * e;
                        },
                        getWeight: function (e) {
                            return 0.15 * this.getMult(e);
                        },
                        minMaxStep: [1, 24, 1],
                        chance: 0.75,
                    },
                    trimpCritChanceUp: {
                        description: function (e) {
                            return "Your Trimps have +" + p(100 * this.getMult(e)) + "% Crit Chance.";
                        },
                        getMult: function (e) {
                            return e / 10;
                        },
                        getWeight: function (e) {
                            return 0.25 * e * -1;
                        },
                        minMaxStep: [5, 10, 1],
                        incompatible: ["trimpCritChanceDown"],
                        chance: 1.25,
                    },
                    trimpCritChanceDown: {
                        description: function (e) {
                            return "Your Trimps have -" + p(100 * this.getMult(e)) + "% Crit Chance.";
                        },
                        getMult: function (e) {
                            return e / 10;
                        },
                        getWeight: function (e) {
                            return e / 4.5;
                        },
                        minMaxStep: [2, 7, 1],
                        incompatible: ["trimpCritChanceUp"],
                        chance: 0.75,
                    },
                    bogged: {
                        description: function (e) {
                            return "Your Trimps lose " + p(100 * this.getMult(e)) + "% of their max health after each attack.";
                        },
                        getMult: function (e) {
                            return 0.01 * e;
                        },
                        getWeight: function (e) {
                            var t = Math.ceil(1 / this.getMult(e));
                            return (6 - (0.2 * (t > 60 ? 60 : t)) / 2 + ((500 * t + 400) / t / 500 - 1)) / 1.5;
                        },
                        incompatible: ["rampage", "weakness"],
                        minMaxStep: [1, 5, 1],
                        chance: 0.3,
                    },
                    dysfunctional: {
                        description: function (e) {
                            return "Your Trimps breed " + p(100 - 100 * this.getMult(e)) + "% slower";
                        },
                        getMult: function (e) {
                            return 1 - 0.05 * e;
                        },
                        getWeight: function (e) {
                            return (1 / this.getMult(e) - 1) / 6;
                        },
                        minMaxStep: [10, 18, 1],
                        chance: 1,
                    },
                    oddTrimpNerf: {
                        description: function (e) {
                            return "Trimps have " + p(100 - 100 * this.getMult(e)) + "% less attack on odd numbered Zones";
                        },
                        getMult: function (e) {
                            return 1 - 0.02 * e;
                        },
                        getWeight: function (e) {
                            return (1 / this.getMult(e) - 1) / 1.5;
                        },
                        minMaxStep: [15, 40, 1],
                        chance: 1,
                    },
                    evenTrimpBuff: {
                        description: function (e) {
                            return "Trimps have " + p(100 * this.getMult(e) - 100) + "% more attack on even numbered Zones";
                        },
                        getMult: function (e) {
                            return 1 + 0.2 * e;
                        },
                        getWeight: function (e) {
                            return -1 * (this.getMult(e) - 1);
                        },
                        minMaxStep: [1, 10, 1],
                        chance: 1,
                    },
                    karma: {
                        description: function (e) {
                            return (
                                "Gain a stack after killing an enemy, increasing all non " +
                                (1 === window.daily_universe ? "Helium" : "Radon") +
                                " loot by " +
                                p(100 * this.getMult(e, 1) - 100) +
                                "%. Stacks cap at " +
                                this.getMaxStacks(e) +
                                ", and reset after clearing a Zone."
                            );
                        },
                        stackDesc: function (e, t) {
                            return "Your Trimps are finding " + p(100 * this.getMult(e, t) - 100) + "% more loot!";
                        },
                        getMaxStacks: function (e) {
                            return Math.floor((e % 9) * 25) + 300;
                        },
                        getMult: function (e, t) {
                            return 1 + 0.0015 * Math.ceil(e / 9) * t;
                        },
                        getWeight: function (e) {
                            return (this.getMult(e, this.getMaxStacks(e)) - 1) / -2;
                        },
                        icon: "*arrow-up",
                        minMaxStep: [1, 45, 1],
                        chance: 1,
                    },
                    toxic: {
                        description: function (e) {
                            return "Gain a stack after killing an enemy, reducing breed speed by " + p(100 - 100 * this.getMult(e, 1)) + "% (compounding). Stacks cap at " + this.getMaxStacks(e) + ", and reset after clearing a Zone.";
                        },
                        stackDesc: function (e, t) {
                            return "Your Trimps are breeding " + p(100 - 100 * this.getMult(e, t)) + "% slower.";
                        },
                        getMaxStacks: function (e) {
                            return Math.floor((e % 9) * 25) + 300;
                        },
                        getMult: function (e, t) {
                            var n = Math.ceil(e / 9);
                            return Math.pow(1 - 0.001 * n, t);
                        },
                        getWeight: function (e) {
                            return (1 / this.getMult(e, this.getMaxStacks(e)) - 1) / 6;
                        },
                        icon: "*radioactive",
                        minMaxStep: [1, 45, 1],
                        chance: 1,
                    },
                    bloodthirst: {
                        description: function (e) {
                            return (
                                "Enemies gain a stack of Bloodthirst whenever Trimps die. Every " +
                                this.getFreq(e) +
                                " stacks, enemies will heal to full and gain an additive 50% attack. Stacks cap at " +
                                this.getMaxStacks(e) +
                                " and reset after killing an enemy."
                            );
                        },
                        stackDesc: function (e, t) {
                            var n = this.getFreq(e),
                                r = this.getMaxStacks(e),
                                a = "This Bad Guy";
                            if (t < r) {
                                var i = n - (t % n);
                                a += " will heal to full and gain attack in " + i + " stack" + (1 === i ? "" : "s") + ", " + (t >= n ? "" : " and") + " gains 1 stack whenever Trimps die";
                            }
                            return t >= n && (t < r && (a += ", and"), (a += " currently has " + p(100 * this.getMult(e, t) - 100) + "% more attack")), (a += ".");
                        },
                        getMaxStacks: function (e) {
                            return this.getFreq(e) * (2 + Math.floor(e / 2));
                        },
                        getFreq: function (e) {
                            return 10 - e;
                        },
                        getMult: function (e, t) {
                            return 1 + 0.5 * Math.floor(t / this.getFreq(e));
                        },
                        getWeight: function (e) {
                            return 0.5 + 0.25 * Math.floor(e / 2);
                        },
                        minMaxStep: [1, 7, 1],
                        chance: 1,
                        icon: "*flask",
                        iconOnEnemy: !0,
                    },
                    explosive: {
                        description: function (e) {
                            var t = "Enemies instantly deal " + p(100 * this.getMult(e)) + "% of their attack damage when killed";
                            return e > 15 && (t += " unless your block is as high as your maximum health"), (t += ".");
                        },
                        getMult: function (e) {
                            return e;
                        },
                        getWeight: function (e) {
                            var t = this.getMult(e);
                            return e <= 15 ? 0.15 * t + 1 / 4 : (1 / 14) * t - 1 / 7;
                        },
                        get minMaxStep() {
                            return 1 === window.daily_universe ? [5, 30, 1] : [5, 10, 1];
                        },
                        chance: 1,
                    },
                    slippery: {
                        description: function (e) {
                            return "Enemies have a " + p(100 * this.getMult(e)) + "% chance to dodge your attacks on " + (e <= 15 ? "odd" : "even") + " Zones.";
                        },
                        getMult: function (e) {
                            return e > 15 && (e -= 15), 0.02 * e;
                        },
                        getWeight: function (e) {
                            return (10 * (1 / (1 - this.getMult(e)) - 1)) / 1.5;
                        },
                        minMaxStep: [1, 30, 1],
                        chance: 1,
                    },
                    rampage: {
                        description: function (e) {
                            return "Gain a stack after killing an enemy, increasing Trimp attack by " + p(100 * this.getMult(e, 1) - 100) + "% (additive). Stacks cap at " + this.getMaxStacks(e) + ", and reset when your Trimps die.";
                        },
                        stackDesc: function (e, t) {
                            return "Your Trimps are dealing " + p(100 * this.getMult(e, t) - 100) + "% more damage.";
                        },
                        getMaxStacks: function (e) {
                            return Math.floor(10 * ((e % 10) + 1));
                        },
                        getMult: function (e, t) {
                            return 1 + 0.01 * Math.ceil(e / 10) * t;
                        },
                        getWeight: function (e) {
                            return (1 - this.getMult(e, 1)) * this.getMaxStacks(e);
                        },
                        icon: "*fire",
                        incompatible: ["plague", "bogged"],
                        minMaxStep: [1, 40, 1],
                        chance: 1,
                    },
                    mutimps: {
                        description: function (e) {
                            var t = e % 5;
                            return "40% of Bad Guys in " + (t = 0 === t ? "" : "the first " + p(2 * t) + " rows of") + " the World will be mutated into " + (e < 4 ? "Mutimps" : "Hulking Mutimps") + ".";
                        },
                        getWeight: function (e) {
                            return (e / 10) * 1.5;
                        },
                        getMaxCellNum: function (e) {
                            e > 5 && (e -= 5);
                            return [19, 39, 59, 79, 99][--e];
                        },
                        minMaxStep: [1, 10, 1],
                        chance: 1,
                    },
                    empower: {
                        description: function (e) {
                            return (
                                "All enemies gain " +
                                e +
                                " stack" +
                                (1 === e ? "" : "s") +
                                " of Empower whenever your Trimps die in the World. Empower increases the attack and health of Bad Guys in the World by 0.2% per stack, can stack to 9999, and never resets."
                            );
                        },
                        getWeight: function (e) {
                            return (e / 6) * 2;
                        },
                        stackDesc: function (e, t) {
                            return "This Bad Guy is Empowered and has " + p(100 * this.getMult(e, t) - 100) + "% more health and attack.";
                        },
                        stacksToAdd: function (e) {
                            return e;
                        },
                        getMult: function (e, t) {
                            return 1 + 0.002 * t;
                        },
                        getMaxStacks: function (e) {
                            return 9999;
                        },
                        worldStacksOnly: !0,
                        iconOnEnemy: !0,
                        icon: "baby-formula",
                        minMaxStep: [1, 10, 1],
                        chance: 1,
                    },
                    pressure: {
                        description: function (e) {
                            return (
                                "Trimps gain a stack of Pressure every " +
                                Math.round(this.timePerStack(e)) +
                                " seconds. Each stack of pressure reduces Trimp health by 1%. Max of " +
                                Math.round(this.getMaxStacks(e)) +
                                " stacks, stacks reset after clearing a Zone."
                            );
                        },
                        getWeight: function (e) {
                            return (1.3 * (105 - this.timePerStack(e)) + this.getMaxStacks(e)) / 200;
                        },
                        getMult: function (e, t) {
                            return Math.pow(0.99, t);
                        },
                        timePerStack: function (e) {
                            return 45 + 5 * (Math.ceil(e / 4) - 1);
                        },
                        stackDesc: function (e, t) {
                            return "Your Trimps are under a lot of pressure. Maximum health is reduced by " + p(100 * (1 - this.getMult(e, t))) + "%.";
                        },
                        getMaxStacks: function (e) {
                            return 45 + 5 * Math.floor(e % 4);
                        },
                        icon: "*heart3",
                        minMaxStep: [1, 16, 1],
                        chance: 1,
                    },
                    mirrored: {
                        description: function (e) {
                            var t = this.getReflectChance(e);
                            return "Enemies have a" + ("8" === t.toString()[0] ? "n" : "") + " " + p(t) + "% chance to reflect an attack, dealing " + p(100 * this.getMult(e)) + "% of damage taken back to your Trimps.";
                        },
                        getReflectChance: function (e) {
                            return 10 * Math.ceil(e / 10);
                        },
                        getMult: function (e) {
                            return ((e % 10) + 1) / 10;
                        },
                        getWeight: function (e) {
                            return ((this.getReflectChance(e) + 90) / 100) * 0.85 * (0.85 * (this.getMult(e) + 0.9));
                        },
                        testWeights: function () {
                            for (var e = 0, t = 0, n = [], r = this.minMaxStep[0]; r <= this.minMaxStep[1]; r += this.minMaxStep[2]) {
                                var a = this.getWeight(r);
                                (0 === e || a < e) && (e = a), a > t && (t = a), n.push(a);
                            }
                            return "Min: " + e + ", Max: " + t;
                        },
                        reflectDamage: function (e, t) {
                            return Math.floor(100 * Math.random()) >= this.getReflectChance(e) ? 0 : this.getMult(e) * t;
                        },
                        blockU2: !0,
                        minMaxStep: [1, 100, 1],
                        chance: 1,
                    },
                    heirlost: {
                        description: function (e) {
                            return "Heirloom combat and resource bonuses are reduced by " + e + "%.";
                        },
                        getWeight: function (e) {
                            return ((e / 10) + 0.5)
                        },
                        getMult: function (e) {
                            return ((100 - e) / 100);
                        },
                        blockU1: !0,
                        minMaxStep: [5, 20, 1],
                        chance: 1,
                    },
                    metallicThumb: {
                        description: function (e) {
                            return "Equipment is " + p(100 * (1 - this.getMult(e))) + "% cheaper.";
                        },
                        getWeight: function (e) {
                            return (e + 3) / 26;
                        },
                        getMult: function (e) {
                            return 1 - (e / 100) * 5;
                        },
                        minMaxStep: [1, 10, 1],
                        chance: 1,
                    },
                    empoweredVoid: {
                        description: function (e) {
                            return "Enemies in Void Maps have +" + p((this.getMult(e) - 1) * 100) + "% increased Attack and Health";
                        },
                        getWeight: function (e) {
                            return ((e / 10) + 0.5);
                        },
                        getMult: function (e) {
                            return (1 + (e / 10));
                        },
                        blockU1: !0,
                        minMaxStep: [10, 25, 1],
                        chance: 1,
                    },
                };
            function p(e) {
                var t = e;
                if (e >= 1e3 && e < 1e4) return Math.floor(e);
                if (0 === e) return f(0);
                if (e < 0) return "-" + p(-e);
                if (e < 0.005) return (+e).toExponential(2);
                var n = Math.floor(Math.log(e) / Math.log(1e3));
                if (n <= 0) return f(e);
                if (5 === g.options.menu.standardNotation.enabled) {
                    var r = g.global.logNotBase,
                        a = Math.log(e) / Math.log(r);
                    return f(a) + "L" + r;
                }
                if (((e /= Math.pow(1e3, n)) >= 999.5 && ((e /= 1e3), ++n), 3 === g.options.menu.standardNotation.enabled)) {
                    var i = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
                    if (n <= i.length) var s = i[n - 1];
                    else {
                        var o = (n % i.length) - 1;
                        o < 0 && (o = i.length - 1), (s = i[Math.ceil(n / i.length) - 2] + i[o]);
                    }
                } else if (
                    ((i = [
                        "K",
                        "M",
                        "B",
                        "T",
                        "Qa",
                        "Qi",
                        "Sx",
                        "Sp",
                        "Oc",
                        "No",
                        "Dc",
                        "Ud",
                        "Dd",
                        "Td",
                        "Qad",
                        "Qid",
                        "Sxd",
                        "Spd",
                        "Od",
                        "Nd",
                        "V",
                        "Uv",
                        "Dv",
                        "Tv",
                        "Qav",
                        "Qiv",
                        "Sxv",
                        "Spv",
                        "Ov",
                        "Nv",
                        "Tg",
                        "Utg",
                        "Dtg",
                        "Ttg",
                        "Qatg",
                        "Qitg",
                        "Sxtg",
                        "Sptg",
                        "Otg",
                        "Ntg",
                        "Qaa",
                        "Uqa",
                        "Dqa",
                        "Tqa",
                        "Qaqa",
                        "Qiqa",
                        "Sxqa",
                        "Spqa",
                        "Oqa",
                        "Nqa",
                        "Qia",
                        "Uqi",
                        "Dqi",
                        "Tqi",
                        "Qaqi",
                        "Qiqi",
                        "Sxqi",
                        "Spqi",
                        "Oqi",
                        "Nqi",
                        "Sxa",
                        "Usx",
                        "Dsx",
                        "Tsx",
                        "Qasx",
                        "Qisx",
                        "Sxsx",
                        "Spsx",
                        "Osx",
                        "Nsx",
                        "Spa",
                        "Usp",
                        "Dsp",
                        "Tsp",
                        "Qasp",
                        "Qisp",
                        "Sxsp",
                        "Spsp",
                        "Osp",
                        "Nsp",
                        "Og",
                        "Uog",
                        "Dog",
                        "Tog",
                        "Qaog",
                        "Qiog",
                        "Sxog",
                        "Spog",
                        "Oog",
                        "Nog",
                        "Na",
                        "Un",
                        "Dn",
                        "Tn",
                        "Qan",
                        "Qin",
                        "Sxn",
                        "Spn",
                        "On",
                        "Nn",
                        "Ct",
                        "Uc",
                    ]),
                    2 === g.options.menu.standardNotation.enabled || (1 === g.options.menu.standardNotation.enabled && n > i.length) || (4 === g.options.menu.standardNotation.enabled && n > 31))
                )
                    s = "e" + 3 * n;
                else {
                    if (!(g.options.menu.standardNotation.enabled && n <= i.length)) return (a = (a = parseFloat(t).toExponential(2)).replace("+", ""));
                    s = i[n - 1];
                }
                return f(e) + s;
            }
            function f(e) {
                e = parseFloat(e);
                var t = Math.floor(e);
                return e === t ? e : e.toFixed(3 - t.toString().length);
            }
            var g = { options: { menu: { standardNotation: { enabled: 4 } } } };
            function m(e, t, n, r, a) {
                var i = a ? 1 : 0;
                switch (e) {
                    case "dailies":
                        if (1 === t) {
                            if (11 - n - i - r <= 0) return !0;
                        } else if (r >= 9 - i) return !0;
                        break;
                    case "heirloopy":
                        if (2 === t && r >= 3 - i) return !0;
                }
                return !1;
            }
            var b = function (e) {
                    var t = e.text;
                    return Object(r.jsx)("div", { className: Object(d.a)(x, "flex items-center justify-center text-xxs select-none sm:text-xs md:text-base"), children: t });
                },
                x = "w-11 h-11 sm:h-16 sm:w-16 md:w-24 md:h-24";
            var v = function (e) {
                    var t = e.object,
                        n = Object(a.useState)(!1),
                        i = Object(u.a)(n, 2),
                        s = i[0],
                        o = i[1],
                        l = t.value,
                        c = t.date,
                        p = t.next,
                        f = t.preview,
                        g = t.tier,
                        m = t.seed,
                        b = t.mods;
                    return void 0 === l
                        ? Object(r.jsx)("div", { className: x })
                        : Object(r.jsxs)(r.Fragment, {
                              children: [
                                  Object(r.jsxs)("div", {
                                      className: Object(d.a)("bg-tier".concat(g), x, "relative flex flex-col items-center justify-center text-black rounded shadow cursor-pointer select-none"),
                                      onClick: function () {
                                          return o(!s);
                                      },
                                      id: String(m),
                                      children: [
                                          Object(r.jsx)("div", { className: "absolute top-0 text-xxxxs sm:text-xxs md:text-xs", children: c }),
                                          Object(r.jsx)("div", { className: "text-xxs sm:text-base md:text-xl", children: "".concat(l.toFixed(1), "%") }),
                                          Object(r.jsxs)("div", {
                                              className: "absolute bottom-0 text-xxxs md:text-xs",
                                              children: [f.join(""), p && Object(r.jsx)("span", { role: "img", title: "This is the next daily", children: "\u2b50" })],
                                          }),
                                      ],
                                  }),
                                  s &&
                                      Object(r.jsx)("span", {
                                          className: "col-span-7 justify-self-center p-2 w-de bg-secondary border border-solid border-prpl rounded sm:w-deSM md:w-deMD",
                                          children: Object(r.jsxs)("p", {
                                              className: "whitespace-pre-wrap text-xxxs sm:text-xs md:text-base",
                                              children: [
                                                  c + "\n",
                                                  Object.keys(b).map(function (e, t) {
                                                      return " \u2192 " + h[e].description(b[e].strength) + "\n";
                                                  }),
                                                  "Bonus is " + l.toFixed(1) + "%",
                                              ],
                                          }),
                                      }),
                              ],
                          });
                },
                j = {
                    empower: "E",
                    explosive: "e",
                    toxic: "T",
                    pressure: "P",
                    plague: "p",
                    bogged: "B",
                    trimpCritChanceUp: "+",
                    trimpCritChanceDown: "-",
                    weakness: "W",
                    minDamage: "m",
                    maxDamage: "M",
                    badHealth: "H",
                    rampage: "D",
                    karma: "K",
                    heirlost: "z",
                    empoweredVoid: "q",
                };
            function y(e) {
                for (var t = [], n = w(0, !0), r = 0; r < 8; r++) {
                    var a = -1 * n + r;
                    a > -1 && (a = r - n - 7);
                }
                var i = a - 7,
                    s = i - a + 1;
                -13 === i && ((i = -6), (s = -7));
                for (var o = i; o < e; o++) {
                    var l = E(o),
                        c = l.seed;
                    delete l.seed;
                    var u = B(T(l));
                    o < s
                        ? t.push({})
                        : t.push({
                              value: u,
                              date: S(o),
                              next: 1 === o,
                              mods: l,
                              preview: Object.keys(l).reduce(function (e, t) {
                                  return "seed" === t || (j.hasOwnProperty(t) && e.push(j[t])), e;
                              }, []),
                              tier: k(u),
                              seed: c,
                          });
                }
                return t;
            }
            window.daily_universe = 1;
            var O,
                M = [225, 335, 425];
            function k(e) {
                return e <= M[0] ? 1 : e <= M[1] && e > M[0] ? 2 : e > M[1] ? 3 : void 0;
            }
            function w(e, t) {
                var n = new Date();
                if ((e || (e = 0), n.setUTCDate(n.getUTCDate() + e), t)) return n.getUTCDay();
                var r = n.getUTCFullYear(),
                    a = n.getUTCMonth() + 1;
                a < 10 && (a = "0" + a);
                var i = n.getUTCDate();
                i < 10 && (i = "0" + i);
                var s = String(r) + String(a) + String(i);
                return (s = parseInt(s));
            }
            function S(e) {
                var t = new Date();
                e || (e = 0), t.setUTCDate(t.getUTCDate() + e);
                var n = t.getUTCFullYear(),
                    r = t.getUTCMonth() + 1;
                r < 10 && (r = "0" + r);
                var a = t.getUTCDate();
                return a < 10 && (a = "0" + a), n + "-" + r + "-" + a;
            }
            function N(e, t, n) {
                var r =
                    Math.floor(
                        (function (e) {
                            var t = 1e4 * Math.sin(e++);
                            return parseFloat((t - Math.floor(t)).toFixed(7));
                        })(e) *
                            (n - t)
                    ) + t;
                return r === n ? t : r;
            }
            function C(e, t) {
                if (t.length < e.length) return !1;
                for (var n = 0; n < e.length; n++) if (e[n] > t[n]) return !1;
                return !0;
            }
            function E(e) {
                var t = w(e),
                    n = N(Number(t) + 2, 1, 1e9),
                    r = N(n++, 25, 51) / 10,
                    a = [],
                    i = 0,
                    s = {};
                for (var o in h) (1 === window.daily_universe && h[o].blockU1) || (2 === window.daily_universe && h[o].blockU2) || (a.push(o), (i += h[o].chance));
                var l = 1e3 / i,
                    c = 0,
                    u = a.length,
                    d = [0, 0, 0],
                    p = [N(n++, 0, 2), N(n++, 1, 5), N(n++, 2, 6)];
                r < 2.75 && ((p[2] = 0), (p[0] += 2));
                e: for (var f = 0; f < u; f++)
                    for (var g = a.length, m = [], b = 0; b < g; b++) {
                        for (var x, v = N(n++, 0, 1e3), j = 0, y = 0; y < a.length; y++)
                            if (v < (j += h[a[y]].chance * l) || y === a.length - 1) {
                                (l = 1e3 / (i -= h[a[y]].chance)), (x = y);
                                break;
                            }
                        var O = a[x],
                            M = h[O],
                            k = M.minMaxStep[0] + N(n++, 0, Math.floor((M.minMaxStep[1] + M.minMaxStep[2]) * (1 / M.minMaxStep[2])) - M.minMaxStep[0]) * M.minMaxStep[2],
                            S = M.getWeight(k),
                            E = S < 0.85 ? 0 : S < 1.85 ? 1 : 2;
                        if (!(S + c > r + 1)) {
                            if (C(p, d));
                            else {
                                if (d[E] >= p[E] && b !== g - 1) {
                                    m.length || (m = [O, k, x, E, S]);
                                    continue;
                                }
                                b === g - 1 && m.length && ((O = m[0]), (M = h[O]), (x = m[2]), (k = m[1]), (E = m[3]), (S = m[4]));
                            }
                            if ((d[E]++, (s[a[x]] = { strength: k, stacks: 0 }), (c += S), f > 0 && (c > r || (c >= r - 0.5 && c <= r + 0.5)))) break e;
                            if ((a.splice(x, 1), M.incompatible))
                                for (var T = 0; T < M.incompatible.length; T++) {
                                    var B = a.indexOf(M.incompatible[T]);
                                    B >= 0 && a.splice(B, 1);
                                }
                            break;
                        }
                    }
                return (s.seed = Number(t)), s;
            }
            function T(e) {
                var t = 0,
                    n = e;
                for (var r in n) "seed" !== r && (t += h[r].getWeight(n[r].strength));
                return t;
            }
            function B(e) {
                var t = 75 * e + 20;
                return t < 100 ? (t = 100) : t > 500 && (t = 500), t;
            }
            function D(e, t) {
                var n = w(0);
                if (O === n && !1 === t) return [];
                var r = y(e);
                return (O = n), r;
            }
            y(24);
            var F = function (e) {
                    var t = e.onClick,
                        n = e.className,
                        a = e.label,
                        i = e.variant;
                    return Object(r.jsx)("input", {
                        type: "button",
                        className: Object(d.a)(
                            n,
                            "small" === i ? "p-1 text-xs sm:text-base" : " text-sm sm:text-base p-2",
                            "self-center bg-secondary border border-solid border-accent rounded focus:outline-none shadow cursor-pointer select-none"
                        ),
                        onClick: t,
                        value: a,
                    });
                },
                P = function (e) {
                    var t = e.onChange,
                        n = e.className,
                        a = e.defaultValue,
                        i = e.value,
                        s = e.type,
                        o = e.min,
                        l = e.max,
                        c = e.variant,
                        u = e.disabled;
                    return Object(r.jsx)("div", {
                        className: "relative mt-0.5 rounded shadow",
                        children: Object(r.jsx)("input", {
                            type: "fluffy" === c ? s || "number" : null,
                            onChange: t,
                            defaultValue: a,
                            value: i,
                            min: "fluffy" === c ? o || 0 : null,
                            max: l,
                            disabled: null !== u && void 0 !== u ? u : null,
                            className: Object(d.a)(n, "block p-1 pl-2 w-full text-xs bg-secondary border border-solid border-accent rounded focus:outline-none sm:text-base"),
                        }),
                    });
                },
                U = i.a.memo(P),
                W = P;
            function L(e) {
                var t = e.children,
                    n = e.className;
                return Object(r.jsx)("label", { className: Object(d.a)(n, "block text-left text-xxs sm:text-xs"), children: t });
            }
            var R = {
                    minDamage: !0,
                    maxDamage: !0,
                    plague: !0,
                    weakness: !0,
                    large: !0,
                    dedication: !0,
                    famine: !0,
                    badStrength: !0,
                    badHealth: !0,
                    badMapStrength: !0,
                    badMapHealth: !0,
                    crits: !0,
                    bogged: !0,
                    dysfunctional: !0,
                    oddTrimpNerf: !0,
                    evenTrimpBuff: !0,
                    karma: !0,
                    toxic: !0,
                    bloodthirst: !0,
                    explosive: !0,
                    slippery: !0,
                    rampage: !0,
                    mutimps: !0,
                    empower: !0,
                    pressure: !0,
                    mirrored: !0,
                    metallicThumb: !0,
                    trimpCritChanceUp: !0,
                    trimpCritChanceDown: !0,
                    empoweredVoid: !0,
                    heirlost: !0,
                },
                I = 2;
            function q(e) {
                var t = e.type,
                    n = Object(a.useContext)(Q).updateDailiesFiltered,
                    i = Object(a.useState)(R[t]),
                    s = Object(u.a)(i, 2),
                    o = s[0],
                    l = s[1];
                return Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsx)("div", {
                        className: Object(d.a)(R[t] ? "bg-tier3" : "bg-tier1", "m-0.5 p-1 w-min text-black text-xxs shadow cursor-pointer select-none sm:text-xs md:text-sm"),
                        onClick: function () {
                            (R[t] = !R[t]), n(), l(!o);
                        },
                        children: t,
                    }),
                });
            }
            var Z = function () {
                    var e = Object(a.useState)(!1),
                        t = Object(u.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        s = Object(a.useContext)(Q).updateDailiesFiltered,
                        o = Object(a.useState)(!1),
                        l = Object(u.a)(o, 2),
                        c = l[0],
                        d = l[1];
                    return Object(r.jsxs)(r.Fragment, {
                        children: [
                            Object(r.jsx)(F, {
                                className: "my-2",
                                onClick: function () {
                                    i(!n);
                                },
                                label: "Filter",
                            }),
                            n &&
                                Object(r.jsxs)("div", {
                                    className: "w-11/12 text-center sm:w-9/12 md:w-3/4 lg:w-5/12",
                                    children: [
                                        Object(r.jsx)("div", {
                                            className: "flex flex-wrap justify-center",
                                            children: Object.keys(R)
                                                .filter(function (e) {
                                                    return !1 === ("hemmorrhage" === e && 1 === window.daily_universe);
                                                })
                                                .map(function (e, t) {
                                                    return Object(r.jsx)(q, { type: e }, t);
                                                }),
                                        }),
                                        Object(r.jsxs)("div", {
                                            className: "flex justify-center mt-2",
                                            children: [
                                                Object(r.jsx)(F, {
                                                    className: "mr-2",
                                                    onClick: function () {
                                                        for (var e in R) R[e] = !R[e];
                                                        d(!c), s();
                                                    },
                                                    label: "Flip All",
                                                }),
                                                Object(r.jsxs)(L, {
                                                    className: "ml-2 w-24",
                                                    children: [
                                                        "Match Atleast",
                                                        Object(r.jsx)(W, {
                                                            type: "number",
                                                            onChange: function (e) {
                                                                (I = Number(e.target.value)), s();
                                                            },
                                                            defaultValue: I,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    });
                },
                Q = Object(a.createContext)({}),
                Y = function (e) {
                    var t = e.children,
                        n = Object(a.useState)(function () {
                            return D(365, !0);
                        }),
                        i = Object(u.a)(n, 2),
                        s = i[0],
                        o = i[1];
                    return Object(r.jsx)(Q.Provider, {
                        value: {
                            dailies: s,
                            updateDailies: function () {
                                var e = D(365, !1);
                                0 !== e.length && o(e);
                            },
                            updateDailiesFiltered: function () {
                                for (
                                    var e = Object.keys(R).filter(function (e) {
                                            return R[e];
                                        }),
                                        t = 0;
                                    t < s.length;
                                    t++
                                )
                                    if (0 !== Object.keys(s[t]).length) {
                                        var n = 0;
                                        Object.keys(s[t].mods).forEach(function (t, r) {
                                            -1 !== e.indexOf(t) && (n += 1);
                                        }),
                                            (document.getElementById(String(s[t].seed)).style.visibility = n >= I ? "" : "hidden");
                                    }
                            },
                            forceDailies: function () {
                                o(D(365, !0));
                            },
                        },
                        children: t,
                    });
                };
            var V = function () {
                    var e = Object(a.useContext)(Q).forceDailies,
                        t = function (t) {
                            var n = Number(t.target.title);
                            window.daily_universe !== n && ((window.daily_universe = n), e());
                        };
                    return Object(r.jsxs)("div", {
                        className: "flex mt-5 shadow-md",
                        children: [
                            Object(r.jsx)("div", {
                                className: Object(d.a)(
                                    1 === window.daily_universe ? "bg-blue-500 text-white" : "bg-secondary text-primary",
                                    "p-2 text-xs border border-r-0 border-solid border-prpl rounded rounded-r-none cursor-pointer select-none sm:text-base"
                                ),
                                onClick: t,
                                title: "1",
                                children: "Universe 1",
                            }),
                            Object(r.jsx)("div", {
                                className: Object(d.a)(
                                    2 === window.daily_universe ? "bg-pink-500 text-white" : "bg-secondary text-primary",
                                    "p-2 text-xs border border-l-0 border-solid border-prpl rounded rounded-l-none cursor-pointer select-none sm:text-base"
                                ),
                                onClick: t,
                                title: "2",
                                children: "Universe 2",
                            }),
                        ],
                    });
                },
                G = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var z = function () {
                    var e = Object(a.useContext)(Q).dailies;
                    return Object(r.jsxs)("div", {
                        className: "flex flex-col flex-wrap items-center",
                        children: [
                            Object(r.jsx)(V, {}),
                            Object(r.jsx)(Z, {}),
                            Object(r.jsxs)("div", {
                                className: "grid gap-2 grid-cols-7 mb-4",
                                children: [
                                    G.map(function (e, t) {
                                        return Object(r.jsx)(b, { text: e }, t);
                                    }),
                                    e.map(function (e, t) {
                                        return Object(r.jsx)(v, { object: e }, t);
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                A = n(10),
                H = n(11),
                _ = n(25),
                X = n(22),
                K = n(23),
                J = n(31);
            var $ = function e() {
                    var t = this;
                    Object(X.a)(this, e),
                        (this.string = void 0),
                        (this.name = "init"),
                        (this.firstLevel = 1e3),
                        (this.level = 0),
                        (this.iceBonus = 0),
                        (this.expBonus = 0),
                        (this.exp = 0),
                        (this.evolution = 0),
                        (this.purchasedFluffyPrestigeBonus = !1),
                        (this.purchasedFluffyExpBonus = !1),
                        (this.universe = 1),
                        (this.zoneYouPortal = 0),
                        (this.dailyBonus = 0),
                        (this.heirloomBonus = 0),
                        (this.graphNextIce = !1),
                        (this.spiresCompleted = []),
                        (this.instantUpdating = !1),
                        (this.minutesPerRun = 14),
                        (this.averageWorshippers = 0),
                        (this.currentExp = 0),
                        (this.traps = void 0),
                        (this.autoBattle = void 0),
                        (this.daily = void 0),
                        (this.portal = void 0),
                        (this.displayData = { xpPerRun: 0, currentZone: 0, table: [[]], levelUpTable: {}, percentToLevel: 0, bonesToLevel: 0, XPhr: 0, name: "init" }),
                        (this.save = { fluffyExp: 0, fluffyExp2: 0, fluffyPrestige: 0, fluffyPrestige2: 0, lastPortal: 0, lastRadonPortal: 0, bestFluffyExp: 0, zone: [0, 0], heirloomBonus: 0 }),
                        (this.atMaxEvo = function () {
                            return 2 === t.universe || 10 === t.evolution;
                        }),
                        (this.getLevel = function (e, n) {
                            return Math.floor(Math.log((n / t.getFirstLevel(e)) * 3 + 1) / Math.log(4));
                        }),
                        (this.getFirstLevel = function (e) {
                            return 1e3 * Math.pow(5, e);
                        }),
                        (this.removeExp = function (e, n) {
                            return 10 === n ? 0 : Math.floor(t.firstLevel * Math.pow(5, e) * ((Math.pow(4, n) - 1) / 3));
                        }),
                        (this.getExpBonus = function () {
                            var e = 1;
                            return (
                                1 === t.universe && (e *= t.getExpGrowth()),
                                t.dailyBonus > 1 && (e *= t.dailyBonus),
                                t.heirloomBonus > 1 && (e *= t.heirloomBonus),
                                t.purchasedFluffyExpBonus && (e *= 0.25 * t.evolution + 1),
                                t.traps.owned > 0 && (e *= (0.15 + 0.075 * (t.traps.level - 1)) * t.traps.owned + 1),
                                t.graphNextIce && t.iceBonus > 1 && (e *= t.iceBonus),
                                2 === t.universe && (t.averageWorshippers > 0 && (e *= 0.05 * t.averageWorshippers * 0.375 + 1), t.autoBattle.oneTimers.Battlescruff && (e *= 1 + (t.autoBattle.maxEnemyLevel - 1) / 50)),
                                e
                            );
                        }),
                        (this.getUpgradeExp = function (e, n, r) {
                            return 10 === n ? t.currentExp : Math.floor(t.firstLevel * Math.pow(5, e) * ((Math.pow(4, n + 1) - 1) / 3) - t.removeExp(e, n));
                        }),
                        (this.getMinZoneForExp = function () {
                            if (1 === t.universe) {
                                var e = 301;
                                return t.portal.Classy.level && (e -= 3 * t.portal.Classy.level), Math.floor(e);
                            }
                            return 0;
                        }),
                        (this.getExpGrowth = function () {
                            return 2 === t.universe ? 1.02 : 1.015;
                        }),
                        (this.getBaseExp = function () {
                            return 2 === t.universe ? 2.5 : 50;
                        }),
                        (this.xpFromZone = function (e, n) {
                            var r,
                                a,
                                i = t.getMinZoneForExp();
                            if (n < i) return 0;
                            e < i && (e = i),
                                1 === t.universe
                                    ? ((r = (Math.pow(t.getExpGrowth(), n - i) - 1) / (t.getExpGrowth() - 1)), (a = (t.getBaseExp() + 80 * t.portal.Curious.level) * (1 + 0.25 * t.portal.Cunning.level) * t.expBonus))
                                    : ((r = (Math.pow(Math.pow(t.getExpGrowth(), 3), n) - 1) / (Math.pow(t.getExpGrowth(), 3) - 1)), (a = t.getBaseExp() * t.expBonus));
                            var s = 0;
                            1 === t.universe &&
                                t.spiresCompleted.length > 0 &&
                                (s = t.spiresCompleted
                                    .map(function (e) {
                                        return 100 * (e + 1);
                                    })
                                    .reduce(function (r, a) {
                                        return e < a && n > a ? r + t.spireXP(a) : r;
                                    }, 0));
                            return e > i ? r * a + s - t.xpFromZone(i, e) : r * a + s;
                        }),
                        (this.spireXP = function (e) {
                            return (50 + 80 * t.portal.Curious.level) * Math.pow(t.getExpGrowth(), e - t.getMinZoneForExp() - 1) * (1 + 0.25 * t.portal.Cunning.level) * t.expBonus * t.getExpGrowth();
                        }),
                        (this.getHeirloomValue = function (e, t, n, r, a) {
                            var i = e / 100 + 1;
                            return 2 !== t || m("heirloopy", t, n, r, a) || (i = 0.1 * (i - 1) + 1), i > 1 ? i : 1 === i ? 1 : void 0;
                        }),
                        (this.getTableCell = function (e, n, r) {
                            if (t.evolution === e && t.level > n) return 0;
                            var a = t.displayData.xpPerRun,
                                i = t.evolution === e ? t.currentExp : 0;
                            return (t.getUpgradeExp(e, n, i) - i) / a + r;
                        }),
                        (this.getTableData = function () {
                            var e = t.evolution;
                            t.displayData.xpPerRun = Math.round(t.xpFromZone(0, t.zoneYouPortal));
                            for (var n = [], r = 0, a = 2 === t.universe ? t.level : 0, i = a; i < a + 10; i++) (r = t.getTableCell(e, i, r)), (n[i] = [r]);
                            if (!t.atMaxEvo()) for (var s = 0; s < 10; s++) (r = t.getTableCell(e + 1, s, r)), n[s].push(r);
                            return n;
                        }),
                        (this.getLevelUpTable = function () {
                            var e = t.evolution,
                                n = t.level,
                                r = t.universe === t.save.zone[0] ? t.save.zone[1] : 0,
                                a = {},
                                i = t.zoneYouPortal + 100,
                                s = r,
                                o = t.evolution === e ? t.currentExp : 0,
                                l = t.getUpgradeExp(e, n, o);
                            if (((l -= o), t.xpFromZone(s, i) > l))
                                for (var c = r; c < i; c++) {
                                    if (t.xpFromZone(s, c + 1) >= l) {
                                        if (((s = c), 9 === n)) {
                                            if (1 === t.universe && 10 === e) break;
                                            e++, (n = 0);
                                        } else n++;
                                        var u = void 0;
                                        (u = 2 === t.universe ? "" : "E".concat(e)), (u += "L".concat(n)), (a = Object(H.a)(Object(H.a)({}, a), {}, Object(A.a)({}, u, c))), (l = t.getUpgradeExp(e, n, o));
                                    }
                                }
                            return a;
                        }),
                        (this.updateUniverse = function (e) {
                            (t.universe = e),
                                (t.name = 1 === e ? "Fluffy" : "Scruffy"),
                                (t.evolution = 1 === e ? t.save.fluffyPrestige : t.save.fluffyPrestige2),
                                (t.exp = 1 === e ? t.save.fluffyExp : t.save.fluffyExp2),
                                (t.zoneYouPortal = 1 === e ? t.save.lastPortal : t.save.lastRadonPortal),
                                (t.level = t.getLevel(t.evolution, t.exp)),
                                (t.currentExp = Math.ceil(t.exp - t.removeExp(t.evolution, t.level))),
                                (t.heirloomBonus = ee(t.save.heirloomBonus, t.universe, t.evolution, t.level, t.purchasedFluffyExpBonus)),
                                (t.dailyBonus = te(t.daily, t.universe, t.evolution, t.level, t.purchasedFluffyExpBonus));
                        }),
                        (this.updateDisplayData = function () {
                            var e = t.getUpgradeExp(t.evolution, t.level, 0),
                                n = Math.round(t.xpFromZone(0, t.zoneYouPortal)),
                                r = t.universe === t.save.zone[0] ? t.save.zone[1] : 0;
                            t.displayData = {
                                xpPerRun: n,
                                table: t.getTableData(),
                                levelUpTable: t.getLevelUpTable(),
                                currentZone: r,
                                percentToLevel: Number(((t.currentExp / e) * 100).toFixed(2)),
                                bonesToLevel: 1 === t.universe ? 100 * Math.ceil((e - t.currentExp) / t.save.bestFluffyExp) : 0,
                                XPhr: t.minutesPerRun > 0 ? Math.round((n / t.minutesPerRun) * 60) : 0,
                                name: t.name,
                            };
                        }),
                        (this.pasteSaveActions = function (e) {
                            (t.save = {
                                fluffyExp: e.global.fluffyExp,
                                fluffyExp2: e.global.fluffyExp2,
                                fluffyPrestige: e.global.fluffyPrestige,
                                fluffyPrestige2: e.global.fluffyPrestige2,
                                lastPortal: e.global.lastPortal,
                                lastRadonPortal: e.global.lastRadonPortal,
                                bestFluffyExp: e.stats.bestFluffyExp.valueTotal,
                                zone: [e.global.universe, e.global.world],
                                heirloomBonus: e.heirlooms.Staff.FluffyExp.currentBonus,
                            }),
                                (t.autoBattle = e.global.autoBattleData),
                                (t.daily = J(!0, {}, e.global.dailyChallenge)),
                                (t.portal = J(!0, {}, e.portal)),
                                t.updateUniverse(e.global.universe),
                                (t.purchasedFluffyExpBonus = e.talents.fluffyExp.purchased),
                                (t.averageWorshippers = 2 === t.universe ? e.jobs.Worshipper.owned : 0),
                                (t.purchasedFluffyPrestigeBonus = e.talents.fluffyAbility.purchased),
                                (t.traps = J(!0, {}, e.playerSpire.traps.Knowledge)),
                                (t.graphNextIce = "Ice" === e.global.uberNature),
                                (t.iceBonus = 1 === t.universe ? 1 + 0.0025 * e.empowerments.Ice.level : 1),
                                (t.expBonus = t.getExpBonus()),
                                t.updateDisplayData();
                        }),
                        (this.saveLocalStorage = function () {
                            localStorage.setItem("fluffy-fluffy", JSON.stringify({ instantUpdating: t.instantUpdating, minutesPerRun: t.minutesPerRun, spiresCompleted: t.spiresCompleted }));
                        }),
                        (this.getLocalStorage = function () {
                            var e,
                                n,
                                r,
                                a = JSON.parse(localStorage.getItem("fluffy-fluffy"));
                            (t.instantUpdating = null !== (e = null === a || void 0 === a ? void 0 : a.instantUpdating) && void 0 !== e && e),
                                (t.minutesPerRun = null !== (n = null === a || void 0 === a ? void 0 : a.minutesPerRun) && void 0 !== n ? n : 0),
                                (t.spiresCompleted = null !== (r = null === a || void 0 === a ? void 0 : a.spiresCompleted) && void 0 !== r ? r : []);
                        }),
                        (this.changeVar = function (e, n) {
                            switch (e) {
                                case "Capable Level":
                                    t.portal.Capable.level = Number(n);
                                    break;
                                case "Cunning Level":
                                    t.portal.Cunning.level = Number(n);
                                    break;
                                case "Curious Level":
                                    t.portal.Curious.level = Number(n);
                                    break;
                                case "Classy Level":
                                    t.portal.Classy.level = Number(n);
                                    break;
                                case "Zone You Portal":
                                    t.zoneYouPortal = Number(n);
                                    break;
                                case "Daily Bonus":
                                    (t.dailyBonus = Number(n) / 100 + 1), (t.expBonus = t.getExpBonus());
                                    break;
                                case "Heirloom Bonus":
                                    (t.heirloomBonus = Number(n) / 100 + 1), (t.expBonus = t.getExpBonus());
                                    break;
                                case "List of Spire Clears":
                                    (t.spiresCompleted = n.split(",").map(Number)), t.saveLocalStorage();
                                    break;
                                case "Knowledge Towers":
                                    (t.traps.owned = Number(n)), (t.expBonus = t.getExpBonus());
                                    break;
                                case "Knowledge Level":
                                    (t.traps.level = Number(n)), (t.expBonus = t.getExpBonus());
                                    break;
                                case "Average Worshippers":
                                    (t.averageWorshippers = Number(n)), (t.expBonus = t.getExpBonus());
                                    break;
                                case "Minutes Per Run":
                                    (t.minutesPerRun = Number(n)), t.saveLocalStorage();
                            }
                        });
                },
                ee = function (e, t, n, r, a) {
                    var i = e / 100 + 1;
                    return 2 !== t || m("heirloopy", t, n, r, a) || (i = 0.1 * (i - 1) + 1), i > 1 ? i : 1 === i ? 1 : void 0;
                },
                te = function (e, t, n, r, a) {
                    return e.seed
                        ? (function (e, t) {
                              var n = 75 * e + 20;
                              return n < 100 ? (n = 100) : n > 500 && (n = 500), t && (n += 100), n;
                          })(T(e), m("dailies", t, n, r, a)) /
                              100 +
                              1
                        : 1;
                },
                ne = Object(a.createContext)({}),
                re = function (e) {
                    var t = e.children,
                        n = Object(a.useState)({ 0: new $() }),
                        i = Object(u.a)(n, 2),
                        s = i[0],
                        o = i[1],
                        l = Object(a.useState)([0]),
                        c = Object(u.a)(l, 2),
                        d = c[0],
                        h = c[1];
                    return Object(r.jsx)(ne.Provider, {
                        value: {
                            fluffyInstances: s,
                            anotherInstance: function () {
                                console.log("Adding another Fluffy Instance. Epic"),
                                    h(function (e) {
                                        return [].concat(Object(_.a)(e), [e.length - 1]);
                                    }),
                                    o(function (e) {
                                        return Object(H.a)(Object(H.a)({}, e), {}, Object(A.a)({}, Object.keys(e).length, new $()));
                                    });
                            },
                            shown: d,
                        },
                        children: t,
                    });
                },
                ae = function (e) {
                    var t = e.colors,
                        n = e.onClick,
                        i = e.active,
                        s = Object(a.useState)(i),
                        o = Object(u.a)(s, 2),
                        l = o[0],
                        c = o[1],
                        h = "";
                    return (
                        t && (h = l ? "bg-tier3 text-black" : "bg-tier1 text-black"),
                        Object(r.jsx)(r.Fragment, {
                            children: Object(r.jsx)("div", {
                                onClick: function () {
                                    n(),
                                        c(function (e) {
                                            return !e;
                                        });
                                },
                                className: Object(d.a)(t ? h : "bg-secondary", "p-1 pl-2 text-xs border border-solid border-accent rounded shadow cursor-pointer select-none sm:text-base"),
                                children: l ? "True" : "False",
                            }),
                        })
                    );
                },
                ie = i.a.memo(ae);
            function se(e) {
                e.index;
                var t,
                    n,
                    a,
                    i,
                    s,
                    o,
                    l,
                    c,
                    u = e.instance,
                    d = e.universe,
                    h = e.renderParent,
                    p = function (e) {
                        "Instant Updating" === e && ((u.instantUpdating = !u.instantUpdating), u.saveLocalStorage()),
                            "Ice" === e && ((u.graphNextIce = !u.graphNextIce), u.instantUpdating && ((u.expBonus = u.getExpBonus()), u.updateDisplayData(), h())),
                            "Fluffocus" === e && ((u.purchasedFluffyExpBonus = !u.purchasedFluffyExpBonus), u.instantUpdating && ((u.expBonus = u.getExpBonus()), u.updateDisplayData(), h())),
                            "Calculate" === e && (u.updateDisplayData(), h());
                    };
                return Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsx)(
                        "div",
                        {
                            className: "grid gap-4 grid-cols-2 items-end mt-4 w-full",
                            onChange: function (e) {
                                return (function (e) {
                                    var t = e.target,
                                        n = t.labels[0].innerText,
                                        r = t.value;
                                    u.changeVar(n, r), u.instantUpdating && (u.updateDisplayData(), h());
                                })(e);
                            },
                            children:
                                "init" !== (null === u || void 0 === u ? void 0 : u.name) &&
                                Object(r.jsxs)(r.Fragment, {
                                    children: [
                                        Object(r.jsx)("hr", { className: "col-span-2 m-auto w-3/4 border-accent" }),
                                        1 === d &&
                                            Object(r.jsxs)(r.Fragment, {
                                                children: [
                                                    Object(r.jsxs)(L, {
                                                        children: [
                                                            "Capable Level",
                                                            Object(r.jsx)(W, {
                                                                min: 1,
                                                                max: 10,
                                                                variant: "fluffy",
                                                                defaultValue: (null === u || void 0 === u || null === (t = u.portal) || void 0 === t || null === (n = t.Capable) || void 0 === n ? void 0 : n.level) || 0,
                                                            }),
                                                        ],
                                                    }),
                                                    Object(r.jsxs)(L, {
                                                        children: [
                                                            "Cunning Level",
                                                            Object(r.jsx)(W, {
                                                                variant: "fluffy",
                                                                defaultValue: (null === u || void 0 === u || null === (a = u.portal) || void 0 === a || null === (i = a.Cunning) || void 0 === i ? void 0 : i.level) || 0,
                                                            }),
                                                        ],
                                                    }),
                                                    !u.portal.Curious.locked &&
                                                        Object(r.jsxs)(L, {
                                                            children: [
                                                                "Curious Level",
                                                                Object(r.jsx)(W, {
                                                                    variant: "fluffy",
                                                                    defaultValue: (null === u || void 0 === u || null === (s = u.portal) || void 0 === s || null === (o = s.Curious) || void 0 === o ? void 0 : o.level) || 0,
                                                                }),
                                                            ],
                                                        }),
                                                    !u.portal.Classy.locked &&
                                                        Object(r.jsxs)(L, {
                                                            children: [
                                                                "Classy Level",
                                                                Object(r.jsx)(W, {
                                                                    variant: "fluffy",
                                                                    defaultValue: (null === u || void 0 === u || null === (l = u.portal) || void 0 === l || null === (c = l.Classy) || void 0 === c ? void 0 : c.level) || 0,
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                        Object(r.jsxs)(L, { children: ["Zone You Portal", Object(r.jsx)(W, { min: u.getMinZoneForExp(), variant: "fluffy", defaultValue: (null === u || void 0 === u ? void 0 : u.zoneYouPortal) || 0 })] }),
                                        Object(r.jsxs)(L, { children: ["Daily Bonus", Object(r.jsx)(W, { variant: "fluffy", defaultValue: Math.round(100 * (null === u || void 0 === u ? void 0 : u.dailyBonus)) - 100 || 0 })] }),
                                        Object(r.jsxs)(L, { children: ["Heirloom Bonus", Object(r.jsx)(W, { variant: "fluffy", defaultValue: Math.round(100 * (null === u || void 0 === u ? void 0 : u.heirloomBonus)) - 100 || 0 })] }),
                                        1 === d && Object(r.jsxs)(L, { children: ["List of Spire Clears", Object(r.jsx)(W, { defaultValue: String(u.spiresCompleted || "") })] }),
                                        !(null === u || void 0 === u ? void 0 : u.traps.locked) &&
                                            Object(r.jsxs)(r.Fragment, {
                                                children: [
                                                    Object(r.jsxs)(L, { children: ["Knowledge Towers", Object(r.jsx)(W, { variant: "fluffy", defaultValue: (null === u || void 0 === u ? void 0 : u.traps.owned) || 0 })] }),
                                                    Object(r.jsxs)(L, { children: ["Knowledge Level", Object(r.jsx)(W, { variant: "fluffy", defaultValue: (null === u || void 0 === u ? void 0 : u.traps.level) || 0 })] }),
                                                ],
                                            }),
                                        1 === d &&
                                            Object(r.jsxs)(L, {
                                                children: [
                                                    "Ice Enlightenment",
                                                    Object(r.jsx)(ie, {
                                                        colors: !0,
                                                        active: u.graphNextIce,
                                                        onClick: function () {
                                                            p("Ice");
                                                        },
                                                    }),
                                                ],
                                            }),
                                        1 === d &&
                                            Object(r.jsxs)(L, {
                                                children: [
                                                    "Fluffocus Mastery",
                                                    Object(r.jsx)(ie, {
                                                        colors: !0,
                                                        active: u.purchasedFluffyExpBonus,
                                                        onClick: function () {
                                                            p("Fluffocus");
                                                        },
                                                    }),
                                                ],
                                            }),
                                        2 === d && Object(r.jsxs)(L, { children: ["Average Worshippers", Object(r.jsx)(W, { variant: "fluffy", max: 50, defaultValue: u.averageWorshippers })] }),
                                        Object(r.jsx)("hr", { className: "col-span-2 m-auto w-3/4 border-accent" }),
                                        Object(r.jsxs)(L, { children: ["Minutes Per Run", Object(r.jsx)(W, { variant: "fluffy", defaultValue: u.minutesPerRun })] }),
                                        Object(r.jsxs)(L, {
                                            children: [
                                                "Instant Updating",
                                                Object(r.jsx)(ie, {
                                                    colors: !0,
                                                    active: u.instantUpdating,
                                                    onClick: function () {
                                                        return p("Instant Updating");
                                                    },
                                                }),
                                            ],
                                        }),
                                        Object(r.jsx)(F, {
                                            className: "col-span-2 text-center",
                                            label: "Calculate",
                                            onClick: function () {
                                                return p("Calculate");
                                            },
                                        }),
                                    ],
                                }),
                        },
                        u.universe
                    ),
                });
            }
            var oe = i.a.memo(se, function (e, t) {
                return e.universe === t.universe;
            });
            function le(e) {
                var t = e.table;
                return Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)("table", {
                        className: "w-max text-center bg-secondary border border-solid border-prpl shadow-xl",
                        children: [
                            Object(r.jsx)("thead", {
                                children: Object(r.jsxs)("tr", { className: "bg-thirdary", children: [Object(r.jsx)("th", { className: "cell", children: "\ud83d\udc89" }), Object(r.jsx)("th", { className: "cell", children: "On Zone" })] }),
                            }),
                            Object(r.jsx)("tbody", {
                                children: Object.keys(t).map(function (e, n) {
                                    return Object(r.jsxs)(
                                        "tr",
                                        { className: "hover:bg-thirdary", children: [Object(r.jsx)("td", { className: "cell font-bold bg-thirdary", children: e }), Object(r.jsx)("td", { className: "cell", children: t[e] })] },
                                        n
                                    );
                                }),
                            }),
                        ],
                    }),
                });
            }
            var ce = i.a.memo(le);
            function ue(e) {
                return 0 === e
                    ? 0
                    : [Math.floor(e / 60 / 60 / 24), Math.floor(e / 60 / 60) % 24, Math.floor(e / 60) % 60, Math.floor(e % 60)]
                          .map(function (e) {
                              return (e < 10 ? "0" : "") + e;
                          })
                          .join(":")
                          .replace(/00:/g, "");
            }
            var de = function (e) {
                var t = e.data,
                    n = e.second,
                    a = e.time;
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsx)("div", { className: "my-2 text-xl", children: "E".concat(t.evolution, "L").concat(t.level) }),
                        Object(r.jsxs)("table", {
                            className: "w-full bg-secondary border border-solid border-prpl shadow-xl",
                            children: [
                                Object(r.jsx)("thead", {
                                    children: Object(r.jsxs)("tr", {
                                        className: "bg-thirdary",
                                        children: [
                                            Object(r.jsx)("th", { className: "cell", children: "\ud83d\udc89" }),
                                            Object(r.jsx)("th", { className: "cell", children: "Runs to E".concat(t.evolution) }),
                                            a > 0 && Object(r.jsx)("th", { className: "cell", children: "Time to E".concat(t.evolution) }),
                                            n && Object(r.jsx)("th", { className: "cell", children: "Runs to E".concat(t.evolution + 1) }),
                                            n && a > 0 && Object(r.jsx)("th", { className: "cell", children: "Time to E".concat(t.evolution + 1) }),
                                        ],
                                    }),
                                }),
                                Object(r.jsx)("tbody", {
                                    children: t.table.map(function (e, t) {
                                        return Object(r.jsxs)(
                                            "tr",
                                            {
                                                className: "hover:bg-thirdary",
                                                children: [
                                                    Object(r.jsx)("td", { className: "cell font-bold bg-thirdary", children: "L".concat(t + 1) }),
                                                    Object(r.jsx)("td", { className: "cell", children: 0 === e[0] ? "" : e[0].toFixed(2) }),
                                                    a > 0 && Object(r.jsx)("td", { className: "cell", children: 0 === e[0] ? "" : ue(e[0] * a * 60) }),
                                                    void 0 !== e[1] &&
                                                        Object(r.jsxs)(r.Fragment, {
                                                            children: [Object(r.jsx)("td", { className: "cell", children: e[1].toFixed(2) }), a > 0 && Object(r.jsx)("td", { className: "cell", children: ue(e[1] * a * 60) })],
                                                        }),
                                                ],
                                            },
                                            t
                                        );
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            };
            var he = function (e) {
                var t = e.data;
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        "Extra Stats",
                        Object(r.jsx)("hr", { className: "m-auto my-2 w-3/5 border-accent" }),
                        Object(r.jsxs)("div", {
                            className: "grid gap-3 grid-cols-2",
                            children: [
                                t.xpPerRun > 0 && Object(r.jsxs)(L, { className: "col-span-2", children: ["XP Per Run", Object(r.jsx)(U, { value: pe(t.xpPerRun), disabled: !0, className: "bg-thirdary" })] }),
                                Object(r.jsxs)(L, {
                                    className: "col-span-2",
                                    children: [
                                        "Percent Of Level - ",
                                        t.percentToLevel,
                                        "%",
                                        Object(r.jsx)("div", {
                                            className: "flex w-full bg-thirdary border border-solid border-accent rounded",
                                            children: Object(r.jsx)("div", { className: "flex flex-col p-1 text-xs bg-green-500 rounded sm:text-base", style: { width: "".concat(t.percentToLevel, "%") }, children: "\xa0" }),
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(L, { children: ["Current Zone", Object(r.jsx)(U, { value: t.currentZone, disabled: !0, className: "bg-thirdary" })] }),
                                t.bonesToLevel > 0 && Object(r.jsxs)(L, { children: ["Bones To Level", Object(r.jsx)(U, { value: t.bonesToLevel, disabled: !0, className: "bg-thirdary" })] }),
                                t.XPhr > 0 && Object(r.jsxs)(L, { className: "col-span-2", children: [t.name, " XP/hr", Object(r.jsx)(U, { value: pe(t.XPhr), disabled: !0, className: "bg-thirdary" })] }),
                            ],
                        }),
                    ],
                });
            };
            function pe(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            function fe(e) {
                var t = e.onClick,
                    n = e.universe,
                    a = function (e) {
                        var n = Number(e.target.title);
                        t(n);
                    };
                return Object(r.jsxs)("div", {
                    className: "flex mx-auto w-max shadow-md",
                    children: [
                        Object(r.jsx)("div", {
                            className: Object(d.a)(1 === n ? "bg-blue-500 text-white" : "bg-secondary text-primary", "p-1 text-xs border border-r-0 border-solid border-prpl rounded rounded-r-none cursor-pointer select-none sm:text-base"),
                            onClick: a,
                            title: "1",
                            children: "Universe 1",
                        }),
                        Object(r.jsx)("div", {
                            className: Object(d.a)(2 === n ? "bg-pink-500 text-white" : "bg-secondary text-primary", "p-1 text-xs border border-l-0 border-solid border-prpl rounded rounded-l-none cursor-pointer select-none sm:text-base"),
                            onClick: a,
                            title: "2",
                            children: "Universe 2",
                        }),
                    ],
                });
            }
            var ge = i.a.memo(fe);
            function me(e) {
                var t = e.onPaste,
                    n = e.save,
                    i = Object(a.useState)(!0),
                    s = Object(u.a)(i, 2),
                    o = s[0],
                    l = s[1],
                    c = Object(a.useRef)();
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        n &&
                            o &&
                            Object(r.jsx)(F, {
                                variant: "small",
                                className: "col-span-2 self-center mb-4",
                                onClick: function () {
                                    (c.current.innerText = n), l(!o);
                                },
                                label: "Retrieve save",
                            }),
                        Object(r.jsx)("textarea", { className: "p-2 w-full text-sm bg-secondary border border-solid border-accent rounded outline-none shadow-md resize-none", onPaste: t, ref: c, placeholder: "Paste your save..." }),
                    ],
                });
            }
            var be = i.a.memo(me, function (e, t) {
                return !0;
            });
            function xe(e) {
                var t,
                    n = e.index,
                    i = e.instance,
                    s = Object(a.useState)(!0),
                    o = Object(u.a)(s, 2),
                    l = (o[0], o[1]);
                Object(a.useEffect)(function () {
                    0;
                }, []),
                    "init" === i.name && i.getLocalStorage();
                var c = Object(a.useCallback)(
                        function () {
                            l(function (e) {
                                return !e;
                            });
                        },
                        [l]
                    ),
                    h = Object(a.useCallback)(
                        function (e) {
                            e !== i.universe && (i.updateUniverse(e), (i.expBonus = i.getExpBonus()), i.updateDisplayData(), c());
                        },
                        [i, c]
                    );
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsxs)("div", {
                            className: "grid gap-2 grid-cols-1 content-center py-10 sm:grid-cols-2 md:gap-5 md:grid-cols-4 xl:grid-cols-10",
                            children: [
                                Object(r.jsxs)("div", {
                                    className: Object(d.a)("init" === i.name ? "col-span-10 justify-self-center w-1/2" : "self-center xl:col-span-2 xl:col-start-2", "flex flex-wrap justify-center"),
                                    children: [
                                        Object(r.jsx)(be, {
                                            onPaste: function (e) {
                                                var t = (function (e) {
                                                    var t,
                                                        n = e.clipboardData.getData("text/plain").replace(/\s/g, ""),
                                                        r = null !== (t = JSON.parse(Object(K.decompressFromBase64)(n))) && void 0 !== t ? t : null;
                                                    return void 0 !== (null === r || void 0 === r ? void 0 : r.global) && { game: r, string: n };
                                                })(e);
                                                !1 !== t && (i.pasteSaveActions(t.game), (i.string = t.string), c());
                                            },
                                            save: null !== (t = i.string) && void 0 !== t ? t : null,
                                        }),
                                        "init" !== i.name && Object(r.jsx)(oe, { index: n, instance: i, universe: i.universe, renderParent: c }),
                                    ],
                                }),
                                "init" !== i.name &&
                                    Object(r.jsxs)(r.Fragment, {
                                        children: [
                                            Object(r.jsxs)("div", {
                                                className: "text-center md:col-span-2 xl:col-span-4",
                                                children: [
                                                    Object(r.jsx)(ge, { universe: i.universe, onClick: h }),
                                                    Object(r.jsx)(de, { second: !i.atMaxEvo(), time: i.minutesPerRun, data: { evolution: i.evolution, level: i.level, table: i.displayData.table } }),
                                                ],
                                            }),
                                            Object(r.jsx)("div", {
                                                className: "text-center sm:col-span-2 sm:mt-3 md:col-span-1 md:mt-0 xl:col-span-2",
                                                children: Object(r.jsx)("div", { className: "m-auto w-1/2 md:w-auto", children: Object(r.jsx)(he, { data: i.displayData }) }),
                                            }),
                                            Object.keys(i.displayData.levelUpTable).length > 0 &&
                                                Object(r.jsx)("div", { className: "col-span-1 m-auto sm:col-span-2 md:col-span-4 xl:col-span-10", children: Object(r.jsx)(ce, { table: i.displayData.levelUpTable }) }),
                                        ],
                                    }),
                            ],
                        }),
                        Object(r.jsx)("hr", { className: "m-auto w-4/6 border-prpl shadow" }),
                    ],
                });
            }
            var ve = i.a.memo(xe, function (e, t) {
                return e.index === t.index;
            });
            var je = function () {
                    var e = Object(a.useContext)(ne),
                        t = e.fluffyInstances,
                        n = e.anotherInstance,
                        i = e.shown;
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsxs)("div", {
                            className: "p-5",
                            children: [
                                i.map(function (e, n) {
                                    return Object(r.jsx)(ve, { index: n, instance: t[n] }, n);
                                }),
                                Object(r.jsx)("div", {
                                    className: "w-full",
                                    children: Object(r.jsxs)("div", {
                                        className: "relative m-auto w-32 h-32 text-primary fill-current cursor-pointer select-none",
                                        onClick: function () {
                                            n();
                                        },
                                        children: [
                                            Object(r.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 16 16",
                                                children: Object(r.jsx)("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }),
                                            }),
                                            Object(r.jsx)("div", { className: "absolute bottom-0 w-full text-center", children: "Add Instance" }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ye = { "/fluffy": "Fluffy Calculator", "/daily": "Daily Seeker" },
                Oe = function (e) {
                    "light-theme" === e
                        ? (localStorage.setItem("fluffy-theme", "light-theme"), document.body.classList.replace("dark-theme", "light-theme"))
                        : (localStorage.setItem("fluffy-theme", "dark-theme"), document.body.classList.replace("light-theme", "dark-theme"));
                };
            function Me() {
                return Object(r.jsx)("div", {
                    className: "absolute right-0 top-0 m-1 p-1 text-primary bg-secondary border border-solid border-green-400 shadow-xl invisible cursor-pointer select-none sm:visible",
                    onClick: function () {
                        document.body.classList.contains("light-theme") ? Oe("dark-theme") : Oe("light-theme");
                    },
                    children: "Swap Theme",
                });
            }
            function ke(e) {
                var t = e.location,
                    n = e.current;
                return Object(r.jsx)(l.b, { to: t, className: Object(d.a)(n && "text-prpl border-b-2 border-prpl", "inline-block p-3 pb-1 text-base font-extrabold"), children: ye[t] });
            }
            var we = function () {
                Object(a.useEffect)(function () {
                    Oe(localStorage.getItem("fluffy-theme"));
                }, []);
                var e = Object(c.f)(),
                    t = null === e || void 0 === e ? void 0 : e.pathname;
                return (
                    (document.title = ye[t] || "Fluffy Calculator"),
                    Object(r.jsxs)("div", {
                        className: "width-full text-center bg-thirdary shadow-md",
                        children: [Object(r.jsx)(ke, { location: "/fluffy", current: "/" === t || "/fluffy" === t }), Object(r.jsx)(ke, { location: "/daily", current: "/daily" === t }), Object(r.jsx)(Me, {})],
                    })
                );
            };
            var Se = function () {
                return Object(r.jsx)(l.a, {
                    basename: "/",
                    hashType: "noslash",
                    children: Object(r.jsxs)("main", {
                        children: [Object(r.jsx)(we, {}), Object(r.jsxs)(c.c, { children: [Object(r.jsx)(c.a, { path: "/daily", component: z }), Object(r.jsx)(c.a, { path: "/(fluffy|)", component: je })] })],
                    }),
                });
            };
            n(41);
            o.a.render(Object(r.jsx)(i.a.StrictMode, { children: Object(r.jsx)(Y, { children: Object(r.jsx)(re, { children: Object(r.jsx)(Se, {}) }) }) }), document.getElementById("root"));
        },
    },
    [[42, 1, 2]],
]);
//# sourceMappingURL=main.df896865.chunk.js.map
