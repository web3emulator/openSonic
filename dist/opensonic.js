! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 86)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sprite_info_destroy = t.sprite_create = t.sprite_get_image = t.sprite_get_animation = t.sprite_init = void 0;
    var o = n(4),
        a = n(26),
        i = n(12),
        r = n(8),
        _ = n(17),
        s = (n(9), n(2)),
        c = n(10),
        d = {},
        l = ["animal", "bigring", "bluering", "bosses", "bumber", "charge", "checkpointorb", "chef", "danger", "dangpower", "dnadoor", "door", "explosion", "fireball", "flyingboy", "flyingeyes", "font", "glasses", "goal", "goldfish", "hud", "icon", "itembox", "joan", "kleps", "lady_bugsy", "levelact", "loop", "menu", "misc", "nafder", "neon", "oranjection", "ring", "roboxer", "shield", "spikes", "spring", "surge", "surpreyes", "switch", "teleporter"],
        u = 0,
        p = [],
        f = (t.sprite_init = function() {
            return new Promise(function(e, t) {
                var n = void 0;
                for ((0, r.logfile_message)("Loading sprites..."), d = (0, a.hashtable_spriteinfo_t_create)(), n = 0; n < l.length; n++) l[n] = "data/sprites/" + l[n] + ".json";
                (0, c.video_renderLoading)("Loading...", 0), (0, _.resourcemanager_getJsonFiles)(l).then(function(t) {
                    for (n = 0; n < t.length; n++)
                        for (var o in t[n]) t[n][o].name = o, p.push(t[n][o]);
                    E(p).then(function() {
                        (0, r.logfile_message)("All sprites have been loaded!"), d = (0, a.hashtable_sprites)(), e()
                    })
                })
            })
        }, t.sprite_get_animation = function(e, t) {
            var n = void 0;
            return n = d[e], null != n ? n.animation_data[t] : null
        }, t.sprite_get_image = function(e, t) {
            return e ? e.frame_data[e.data[t]] : 0
        }, t.sprite_create = function(e) {
            return new Promise(function(t, n) {
                m(e).then(t)
            })
        }, t.sprite_info_destroy = function(e) {
            var t = void 0;
            if (null != e.source_file && (e.source_file = null), null != e.frame_data) {
                for (t = 0; t < e.frame_count; t++)(0, i.image_destroy)(e.frame_data[t]);
                e.frame_data = null
            }
            if (null != e.animation_data) {
                for (t = 0; t < e.animation_count; t++) e.animation_data[t] = f(e.animation_data[t]);
                e.animation_data = null
            }
            e = null
        }, function(e) {
            return null != e && (null != e.data && (e.data = null), e = null), null
        }),
        g = function(e) {
            var t = void 0,
                n = void 0,
                o = void 0;
            for ((e.frame_w > e.rect_w || e.frame_h > e.rect_h) && (e.frame_w = Math.min(e.frame_w, e.rect_w), e.frame_h = Math.min(e.frame_h, e.rect_h)), (e.rect_w % e.frame_w > 0 || e.rect_h % e.frame_h > 0) && (e.rect_w = e.rect_w % e.frame_w > 0 ? e.rect_w - e.rect_w % e.frame_w + e.frame_w : e.rect_w, e.rect_h = e.rect_h % e.frame_h > 0 ? e.rect_h - e.rect_h % e.frame_h + e.frame_h : e.rect_h), o = e.rect_w / e.frame_w * (e.rect_h / e.frame_h), t = 0; t < e.animation_count; t++)
                for (n = 0; n < e.animation_data[t].frame_count; n++) e.animation_data[t].data[n] >= 0 && e.animation_data[t].data[n] < o || (e.animation_data[t].data[n] = Math.min(e.animation_data[t].data[n], 0, o - 1));
            return e
        },
        v = function(e) {
            0 == e.frame_count && (0, r.logfile_message)("Animation error: invalid 'data' field. You must specify the frames of the animations")
        },
        m = function(e) {
            return new Promise(function(t, n) {
                var o = h(),
                    a = x(o, e);
                a = g(a), b(a).then(function(n) {
                    a = I(n), S(e.name, a), u++, (0, c.video_renderLoading)("Loading...", u / p.length), t(a)
                })
            })
        },
        h = function() {
            var e = {};
            return e.source_file = null, e.rect_x = 0, e.rect_y = 0, e.rect_w = 0, e.rect_h = 0, e.frame_w = e.frame_h = 0, e.hot_spot = (0, s.v2d_new)(0, 0), e.frame_count = 0, e.frame_data = [], e.animation_count = 0, e.animation_data = [], e
        },
        b = function(e) {
            return new Promise(function(t, n) {
                (0, i.image_load)(e.source_file).then(function(n) {
                    e.frame_count = parseInt(e.rect_w / e.frame_w * (e.rect_h / e.frame_h), 10), e.frame_data = [], e = y(e, n), t(e)
                })
            })
        },
        y = function(e, t) {
            for (var n = 0, o = 0, a = 0; a < parseInt(e.frame_count, 10); a++) e.frame_data[a] = {
                data: t,
                sx: n + e.rect_x,
                sy: o + e.rect_y,
                swidth: e.frame_w,
                sheight: e.frame_h,
                x: 0,
                y: 0,
                width: e.frame_w,
                height: e.frame_h
            }, (n += e.frame_w) >= e.rect_w && (n = 0, o += e.frame_h);
            return e
        },
        I = function(e) {
            for (var t = 0; t < e.animation_count; t++) e.animation_data[t].frame_data = e.frame_data, e.animation_data[t].hot_spot = e.hot_spot;
            return e
        },
        E = function(e) {
            return Promise.all(e.map(m))
        },
        x = function(e, t) {
            if (e.source_file = o.DATA_ROOT + t.source_file, e.rect_x = t.source_rect.xpos, e.rect_y = t.source_rect.ypos, e.rect_w = t.source_rect.width, e.rect_h = t.source_rect.height, e.frame_w = t.frame_size.width, e.frame_h = t.frame_size.height, t.hot_spot && (e.hot_spot.x = t.hot_spot.xpos, e.hot_spot.y = t.hot_spot.ypos), t.animations) {
                e.animation_count = t.animations.length;
                for (var n = 0; n < e.animation_count; n++) e.animation_data[n] = w(O(), t.animations[n]), v(e.animation_data[n])
            }
            return e
        },
        w = function(e, t) {
            return e.repeat = t.repeat, e.fps = t.fps, e.data = t.data, e.frame_count = t.data.length, e
        },
        S = function(e, t) {
            (0, a.hashtable_spriteinfo_t_add)((0, a.hashtable_sprites)(), e, t)
        },
        O = function() {
            var e = {};
            return e.repeat = !1, e.fps = 8, e.frame_count = 0, e.data = null, e.hot_spot = (0, s.v2d_new)(0, 0), e.frame_data = null, e
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.actor_bullet_movement = t.actor_eightdirections_movement = t.actor_particle_movement = t.actor_platform_movement = t.actor_handle_acceleration = t.actor_handle_jumping = t.actor_handle_slopes = t.actor_handle_floor_collision = t.actor_handle_ceil_collision = t.actor_handle_wall_collision = t.actor_handle_carrying = t.actor_handle_collision_detectors = t.actor_handle_clouds = t.actor_get_collision_detectors = t.actor_corners_disable_detection = t.actor_corners_restore_slope_priority = t.actor_corners_set_slope_priority = t.actor_corners_restore_floor_priority = t.actor_corners_set_floor_priority = t.actor_corners_ex = t.actor_corners = t.actor_render_corners = t.actor_brick_collision = t.actor_pixelperfect_collision = t.actor_orientedbox_collision = t.actor_collision = t.actor_animation_finished = t.actor_change_animation = t.actor_change_animation_speed_factor = t.actor_change_animation_frame = t.actor_image = t.actor_move = t.actor_render_repeat_xy = t.actor_render = t.actor_destroy = t.actor_create = void 0;
    var o = n(4),
        a = n(2),
        i = n(13),
        r = n(12),
        _ = n(10),
        s = n(3),
        c = n(0),
        d = n(9),
        l = n(23),
        u = -2,
        p = .5,
        f = !0,
        g = !0,
        v = !1,
        m = !1,
        h = !1,
        b = !1,
        y = (t.actor_create = function() {
            var e = {};
            return e.spawn_point = (0, a.v2d_new)(0, 0), e.position = (0, a.v2d_new)(e.spawn_point.x, e.spawn_point.y), e.angle = 0, e.speed = (0, a.v2d_new)(0, 0), e.maxspeed = 0, e.acceleration = 0, e.jump_strength = 0, e.is_jumping = !1, e.ignore_horizontal = !1, e.input = null, e.animation = null, e.animation_frame = 0, e.animation_speed_factor = 1, e.mirror = !1, e.visible = !0, e.alpha = 1, e.hot_spot = (0, a.v2d_new)(0, 0), e.carried_by = null, e.carry_offset = (0, a.v2d_new)(0, 0), e.carrying = null, e
        }, t.actor_destroy = function(e) {
            e.input && (0, i.input_destroy)(e.input), e = null
        }, t.actor_render = function(e, t) {
            if (t && e) {
                var n = void 0;
                if (e.visible && e.animation) {
                    if (e.animation_frame += e.animation.fps * e.animation_speed_factor * (0, s.timer_get_delta)(), e.animation_frame > e.animation.frame_count - 1 && (e.animation.repeat ? e.animation_frame = 0 : e.animation_frame = e.animation.frame_count - 1), e.position, !(n = I(e))) return !1;
                    e.mirror && C((0, _.video_get_backbuffer)(), parseInt(e.position.x - (t.x - _.VIDEO_SCREEN_W / 2), 10));
                    var o = parseInt(e.position.x - (t.x - _.VIDEO_SCREEN_W / 2), 10),
                        a = parseInt(e.position.y - (t.y - _.VIDEO_SCREEN_H / 2), 10),
                        i = e.mirror ? e.angle : -e.angle;
                    e.angle && ((0, _.video_get_backbuffer)().translate(o, a), (0, _.video_get_backbuffer)().rotate(i), (0, _.video_get_backbuffer)().translate(-o, -a)), (0, _.video_get_backbuffer)().drawImage(n.data, n.sx, n.sy, n.swidth, n.sheight, parseInt(e.position.x - e.hot_spot.x - (t.x - _.VIDEO_SCREEN_W / 2), 10), parseInt(e.position.y - e.hot_spot.y - (t.y - _.VIDEO_SCREEN_H / 2), 10), n.width * _.VIDEO_SCALE, n.height * _.VIDEO_SCALE), e.angle && ((0, _.video_get_backbuffer)().translate(o, a), (0, _.video_get_backbuffer)().rotate(-i), (0, _.video_get_backbuffer)().translate(-o, -a)), e.mirror && C((0, _.video_get_backbuffer)(), parseInt(e.position.x - (t.x - _.VIDEO_SCREEN_W / 2), 10))
                }
            }
        }, t.actor_render_repeat_xy = function(e, t, n, a) {
            var i = void 0,
                r = void 0,
                c = void 0,
                d = void 0,
                l = void 0,
                u = {};
            if (e.visible && e.animation) {
                if (isNaN(e.animation_frame) && (e.animation_frame = 0, e.animation.fps = 1), e.animation_frame += e.animation.fps * e.animation_speed_factor * (0, s.timer_get_delta)(), e.animation_frame > e.animation.frame_count - 1 && (e.animation.repeat ? e.animation_frame = 0 : e.animation_frame = e.animation.frame_count - 1), !(l = I(e))) return !1;
                for (u.x = e.position.x % (n ? l.width : o.INT_MAX) - e.hot_spot.x - (t.x - _.VIDEO_SCREEN_W / 2) - (n ? l.width : 0), u.y = e.position.y % (a ? l.height : o.INT_MAX) - e.hot_spot.y - (t.y - _.VIDEO_SCREEN_H / 2) - (a ? l.height : 0), c = n ? _.VIDEO_SCREEN_W / l.width + 3 : 1, d = a ? _.VIDEO_SCREEN_H / l.height + 3 : 1, i = 0; i < c; i++)
                    for (r = 0; r < d; r++)(0, _.video_get_backbuffer)().drawImage(l.data, l.sx, l.sy, l.swidth, l.sheight, u.x + i * l.width, u.y + r * l.height, l.width * _.VIDEO_SCALE, l.height * _.VIDEO_SCALE)
            }
        }, t.actor_move = function(e, t) {
            t || (t = {
                x: 0,
                y: 0
            }), t.x = t.x || 0, t.y = t.y || 0, Math.abs(t.x) < o.EPSILON && (t.x = 0), e.position.x += t.x * Math.cos(e.angle) + t.y * Math.sin(e.angle), e.position.y += t.y * Math.cos(e.angle) - t.x * Math.sin(e.angle)
        }),
        I = t.actor_image = function(e) {
            return (0, c.sprite_get_image)(e.animation, parseInt(e.animation_frame, 10))
        },
        E = (t.actor_change_animation_frame = function(e, t) {
            return e.animation_frame = (0, d.clip)(t, 0, e.animation.frame_count), e
        }, t.actor_change_animation_speed_factor = function(e, t) {
            return e.animation_speed_factor = Math.max(0, t), e
        }, t.actor_change_animation = function(e, t) {
            return !(!e || !t) && (e.animation != t && (e.animation = t, e.hot_spot = t.hot_spot, e.animation_frame = 0, e.animation_speed_factor = 1), e)
        }, t.actor_animation_finished = function(e) {
            var t = e.animation_frame + e.animation.fps * e.animation_speed_factor * (0, s.timer_get_delta)();
            return !e.animation.repeat && t > e.animation.frame_count - 1
        }, t.actor_collision = function(e, t) {
            var n = 0,
                i = 0,
                r = [];
            if (r[0] = [], r[1] = [], r[0][0] = (0, a.v2d_subtract)(e.position, (0, a.v2d_rotate)(e.hot_spot, -e.angle)), r[0][1] = (0, a.v2d_add)(r[0][0], (0, a.v2d_rotate)((0, a.v2d_new)(I(e).width, 0), -e.angle)), r[0][2] = (0, a.v2d_add)(r[0][0], (0, a.v2d_rotate)((0, a.v2d_new)(I(e).width, I(e).height), -e.angle)), r[0][3] = (0, a.v2d_add)(r[0][0], (0, a.v2d_rotate)((0, a.v2d_new)(0, I(e).height), -e.angle)), r[1][0] = (0, a.v2d_subtract)(t.position, (0, a.v2d_rotate)(t.hot_spot, 0)), r[1][1] = (0, a.v2d_add)(r[1][0], (0, a.v2d_rotate)((0, a.v2d_new)(I(t).width, 0), 0)), r[1][2] = (0, a.v2d_add)(r[1][0], (0, a.v2d_rotate)((0, a.v2d_new)(I(t).width, I(t).height), 0)), r[1][3] = (0, a.v2d_add)(r[1][0], (0, a.v2d_rotate)((0, a.v2d_new)(0, I(t).height), 0)), i += Math.abs(e.angle) < o.EPSILON || Math.abs(e.angle - o.PI / 2) < o.EPSILON || Math.abs(e.angle - o.PI) < o.EPSILON || Math.abs(e.angle - 3 * o.PI / 2) < o.EPSILON, i += Math.abs(0) < o.EPSILON || Math.abs(0 - o.PI / 2) < o.EPSILON || Math.abs(0 - o.PI) < o.EPSILON || Math.abs(0 - 3 * o.PI / 2) < o.EPSILON) {
                var _ = [],
                    s = [];
                for (n = 0; n < 2; n++) _[n] = [], _[n][0] = Math.min(r[n][0].x, r[n][1].x), _[n][1] = Math.min(r[n][0].y, r[n][1].y), _[n][2] = Math.max(r[n][2].x, r[n][3].x), _[n][3] = Math.max(r[n][2].y, r[n][3].y), _[n][0] > _[n][2] && (s = (0, d.swap)(_[n][0], _[n][2]), _[n][0] = s[0], _[n][2] = s[1]), _[n][1] > _[n][3] && (s = (0, d.swap)(_[n][1], _[n][3]), _[n][1] = s[0], _[n][3] = s[1]);
                return (0, d.bounding_box)(_[0], _[1])
            }
            var c = [],
                l = [Math.max(I(e).width, I(e).height), Math.max(I(t).width, I(t).height)];
            for (n = 0; n < 2; n++) c[n] = (0, a.v2d_multiply)((0, a.v2d_add)(r[n][0], r[n][2]), .5);
            return (0, d.circular_collision)(c[0], l[0], c[1], l[1])
        }),
        x = t.actor_orientedbox_collision = function(e, t) {
            var n = {},
                o = {},
                a = {},
                i = {},
                r = [],
                _ = [];
            return r = B(void 0, e, r), _ = B(void 0, t, _), n.x = Math.min(r[0].x, Math.min(r[1].x, Math.min(r[2].x, r[3].x))), n.y = Math.min(r[0].y, Math.min(r[1].y, Math.min(r[2].y, r[3].y))), o.x = Math.min(_[0].x, Math.min(_[1].x, Math.min(_[2].x, _[3].x))), o.y = Math.min(_[0].y, Math.min(_[1].y, Math.min(_[2].y, _[3].y))), a.x = Math.max(r[0].x, Math.max(r[1].x, Math.max(r[2].x, r[3].x))) - n.x, a.y = Math.max(r[0].y, Math.max(r[1].y, Math.max(r[2].y, r[3].y))) - n.y, i.x = Math.max(_[0].x, Math.max(_[1].x, Math.max(_[2].x, _[3].x))) - o.x, i.y = Math.max(_[0].y, Math.max(_[1].y, Math.max(_[2].y, _[3].y))) - o.y, n.x + a.x >= o.x && n.x <= o.x + i.x && n.y + a.y >= o.y && n.y <= o.y + i.y
        },
        w = (t.actor_pixelperfect_collision = function(e, t) {
            if (Math.abs(e.angle) < o.EPSILON && Math.abs(t.angle) < o.EPSILON) {
                if (E(e, t)) {
                    var n = void 0,
                        a = void 0,
                        i = void 0,
                        _ = void 0;
                    return n = parseInt(e.position.x - e.hot_spot.x, 10), a = parseInt(e.position.y - e.hot_spot.y, 10), i = parseInt(t.position.x - t.hot_spot.x, 10), _ = parseInt(t.position.y - t.hot_spot.y, 10), (0, r.image_pixelperfect_collision)(I(e), I(t), n, a, i, _)
                }
                return !1
            }
            return !!x(e, t)
        }, t.actor_brick_collision = function(e, t) {
            var n = (0, a.v2d_subtract)(e.position, (0, a.v2d_rotate)(e.hot_spot, e.angle)),
                o = (0, a.v2d_add)(n, (0, a.v2d_rotate)((0, a.v2d_new)(I(e).w, I(e).h), e.angle)),
                i = [n.x, n.y, o.x, o.y],
                r = [t.x, t.y, t.x + t.brick_ref.image.width, t.y + t.brick_ref.image.height];
            return (0, d.bounding_box)(i, r)
        }, t.actor_render_corners = function(e, t, n, o) {
            var i = [],
                s = (0, a.v2d_subtract)(o, (0, a.v2d_new)(_.VIDEO_SCREEN_W / 2, _.VIDEO_SCREEN_H / 2)),
                c = I(e).width,
                d = I(e).height,
                l = (0, a.v2d_subtract)(e.position, s),
                u = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(0, -d + n), -e.angle)),
                f = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(0, -n), -e.angle)),
                g = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(-c / 2 + n, -d * p), -e.angle)),
                v = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(c / 2 - n, -d * p), -e.angle)),
                m = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(-c / 2 + n, -d + n), -e.angle)),
                h = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(c / 2 - n, -d + n), -e.angle)),
                b = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(-c / 2 + n, -n), -e.angle)),
                y = (0, a.v2d_add)(l, (0, a.v2d_rotate)((0, a.v2d_new)(c / 2 - n, -n), -e.angle)),
                E = [u.x - t, u.y - t, u.x + t, u.y + t],
                x = [f.x - t, f.y - t, f.x + t, f.y + t],
                w = [g.x - t, g.y - t, g.x + t, g.y + t],
                S = [v.x - t, v.y - t, v.x + t, v.y + t],
                O = [m.x - t, m.y - t, m.x + t, m.y + t],
                L = [h.x - t, h.y - t, h.x + t, h.y + t],
                k = [b.x - t, b.y - t, b.x + t, b.y + t],
                R = [y.x - t, y.y - t, y.x + t, y.y + t];
            i[0] = (0, r.image_rgb)(255, 255, 255), i[1] = (0, r.image_rgb)(0, 128, 255), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), E[0], E[1], E[2], E[3], i[0]), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), x[0], x[1], x[2], x[3], i[0]), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), w[0], w[1], w[2], w[3], i[0]), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), S[0], S[1], S[2], S[3], i[0]), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), k[0], k[1], k[2], k[3], image.rgb(0, 255, 0)), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), R[0], R[1], R[2], R[3], image.rgb(255, 0, 0)), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), L[0], L[1], L[2], L[3], i[1]), (0, r.image_rectfill)((0, _.video_get_backbuffer)(), O[0], O[1], O[2], O[3], i[1])
        }, t.actor_corners = function(e, t, n, o, i, r, _, s, c, d, l, u) {
            var f = I(e).width,
                g = I(e).height,
                v = e.position,
                m = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(0, -g + n), -e.angle)),
                h = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(0, -n), -e.angle)),
                b = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(-f / 2 + n, -g * p), -e.angle)),
                y = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(f / 2 - n, -g * p), -e.angle)),
                E = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(-f / 2 + n, -g + n), -e.angle)),
                x = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(f / 2 - n, -g + n), -e.angle)),
                S = (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(-f / 2 + n, -n), -e.angle));
            return w(e, t, m, x, y, (0, a.v2d_add)(v, (0, a.v2d_rotate)((0, a.v2d_new)(f / 2 - n, -n), -e.angle)), h, S, b, E, o, i, r, _, s, c, d, l, u)
        }, t.actor_corners_ex = function(e, t, n, o, a, i, r, _, s, c, d, l, u, p, f, g, v, m, h) {
            var b = [n.x - t, n.y - t, n.x + t, n.y + t],
                y = [r.x - t, r.y - t, r.x + t, r.y + t],
                I = [s.x - t, s.y - t, s.x + t, s.y + t],
                E = [a.x - t, a.y - t, a.x + t, a.y + t],
                x = [c.x - t, c.y - t, c.x + t, c.y + t],
                w = [o.x - t, o.y - t, o.x + t, o.y + t],
                S = [_.x - t, _.y - t, _.x + t, _.y + t],
                O = [i.x - t, i.y - t, i.x + t, i.y + t];
            return d && (n && (l = j(d, b)), r && (g = j(d, y)), s && (m = j(d, I)), a && (p = j(d, E)), c && (h = j(d, x)), o && (u = j(d, w)), _ && (v = j(d, S)), i && (f = j(d, O))), {
                up: l,
                down: g,
                left: m,
                right: p,
                upleft: h,
                upright: u,
                downleft: v,
                downright: f
            }
        }),
        S = t.actor_corners_set_floor_priority = function(e) {
            f = e
        },
        O = (t.actor_corners_restore_floor_priority = function() {
            S(!0)
        }, t.actor_corners_set_slope_priority = function(e) {
            g = e
        }),
        L = (t.actor_corners_restore_slope_priority = function() {
            O(!0)
        }, t.actor_corners_disable_detection = function(e, t, n, o) {
            v = e, m = t, h = n, b = o
        }, t.actor_get_collision_detectors = function(e, t, n, i, r, _, s, c, d, l) {
            var u = I(e).width,
                p = I(e).height,
                f = !(Math.abs(e.angle) < o.EPSILON || Math.abs(e.angle - o.PI / 2) < o.EPSILON || Math.abs(e.angle - o.PI) < o.EPSILON || Math.abs(e.angle - 3 * o.PI / 2) < o.EPSILON),
                g = e.position,
                v = void 0,
                m = void 0,
                h = void 0;
            return f ? (v = 1, m = .7, h = .25) : (v = .7, m = .5, h = .25), n = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(0, -p * v + t), -e.angle)), s = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(0, -t), -e.angle)), d = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(-u * h + t, -p * m), -e.angle)), r = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(u * h - t, -p * m), -e.angle)), l = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(-u * h + t, -p * v + t), -e.angle)), i = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(u * h - t, -p * v + t), -e.angle)), c = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(-u * h + t, -t), -e.angle)), _ = (0, a.v2d_add)(g, (0, a.v2d_rotate)((0, a.v2d_new)(u * h - t, -t), -e.angle)), {
                up: n,
                down: s,
                left: d,
                right: r,
                upleft: l,
                upright: i,
                downleft: c,
                downright: _
            }
        }),
        k = t.actor_handle_clouds = function(e, t, n, o, a, i, r, _, s, c) {
            var d = void 0,
                u = [n, o, a, s, c];
            for (d = 0; d < u.length; d++) {
                var p = u[d];
                p && p.brick_ref && p.brick_ref.property == l.BRK_CLOUD && (p = null, u[d] = p)
            }
            if (r && r.brick_ref && r.brick_ref.property == l.BRK_CLOUD) {
                var f = Math.min(15, r.brick_ref.image.height / 3);
                e.speed.y >= 0 && e.position.y < r.y + t + 1 + f || (_ && _ == r && (_ = null), i && i == r && (i = null), r = null)
            }
            return {
                up: u[0],
                upright: u[1],
                right: u[2],
                left: u[3],
                upleft: u[4],
                downright: i,
                down: r,
                downleft: _
            }
        },
        R = t.actor_handle_collision_detectors = function(e, t, n, o, a, i, r, _, s, c, d, l, u, p, f, g, v, m) {
            return w(e, 2, n, o, a, i, r, _, s, c, t, d, l, u, p, f, g, v, m)
        },
        N = t.actor_handle_carrying = function(e, t) {
            var n = (0, s.timer_get_delta)();
            if (null != e.carried_by) {
                var o = e.carried_by;
                t && 0 == t.brick_ref.angle && parseInt(o.speed.y, 10) >= 5 ? (e.position = (0, a.v2d_new)(e.carried_by.position.x, e.carried_by.position.y), e.carried_by.carrying = null, e.carried_by = null) : (e.speed = (0, a.v2d_new)(0, 0), e.mirror = o.mirror, e.angle = 0, e.position = (0, a.v2d_subtract)((0, a.v2d_add)(o.position, (0, a.v2d_multiply)(o.speed, n)), e.carry_offset))
            }
        },
        T = t.actor_handle_wall_collision = function(e, t, n, a, i, r) {
            r && r.brick_ref.angle % 90 == 0 && (e.speed.x > o.EPSILON || a.x > r.x) && (e.speed.x = 0, e.position.x = r.x + (t.x - a.x)), i && i.brick_ref.angle % 90 == 0 && (e.speed.x < -o.EPSILON || n.x < i.x + i.brick_ref.image.width) && (e.speed.x = 0, e.position.x = i.x + i.brick_ref.image.width + (t.x - n.x))
        },
        D = t.actor_handle_ceil_collision = function(e, t, n, a) {
            a && a.brick_ref.angle % 90 == 0 && e.speed.y < -o.EPSILON && (e.position.y = a.y + a.brick_ref.image.height + (t.y - n.y), e.speed.y = 10)
        },
        P = t.actor_handle_floor_collision = function(e, t, n, i, r, _, c, d, l) {
            var u = ((0, s.timer_get_delta)(), void 0);
            if (d && !e.is_jumping)
                if (u = d.brick_ref.angle, e.speed.y = i.y = 0, e.angle = u * o.PI / 180, 0 == u) e.position.y = r.y + t;
                else if (u > 0 && u < 90) r.y = d.y + d.brick_ref.image.height - (e.position.x - d.x) * Math.tan(e.angle), e.position.y = r.y + t, e.mirror & o.IF_HFLIP || .2;
            else if (90 == u) {
                if (Math.abs(e.speed.x) > 5) {
                    var p = l ? l.brick_ref.angle : -1;
                    l && p >= u && p < u + 90 ? (r.y = d.x, e.position.x = r.y + t) : (e.angle = n, y(e, (0, a.v2d_new)(6.5 * t, 0)), e.is_jumping = !0, e.speed = (0, a.v2d_new)(0, -.7 * Math.abs(e.speed.x)))
                } else e.angle = n, y(e, (0, a.v2d_new)(5 * t, 0)), e.is_jumping = !0, e.ignore_horizontal = !1;
                e.mirror & o.IF_HFLIP || 1.5
            } else if (u > 90 && u < 180) Math.abs(e.speed.x) > 5 ? (r.y = d.y - (e.position.x - d.x) * Math.tan(e.angle), e.position.y = r.y - t) : (e.angle = n, y(e, (0, a.v2d_new)(0, -15 * t)), e.is_jumping = !0), 1.5;
            else if (180 == u) e.speed.x > 5 && !(e.mirror & o.IF_HFLIP) || e.speed.x < -5 && e.mirror & o.IF_HFLIP ? (r.y = d.y + d.brick_ref.image.height, e.position.y = r.y - t) : (e.angle = n, y(e, (0, a.v2d_new)(0, -20 * t)), e.is_jumping = !0, e.speed.x = 0), 1.2;
            else if (u > 180 && u < 270) Math.abs(e.speed.x) > 5 ? (r.y = d.y + d.brick_ref.image.height - (e.position.x - d.x) * Math.tan(e.angle), e.position.y = r.y - t) : (e.angle = n, y(e, (0, a.v2d_new)(0, -15 * t)), e.is_jumping = !0), 1.5;
            else if (270 == u) {
                if (Math.abs(e.speed.x) > 5) {
                    var f = c ? c.brick_ref.angle : -1;
                    c && f > u - 90 && f <= u ? (r.y = d.x + d.brick_ref.image.width, e.position.x = r.y - t) : (e.angle = n, y(e, (0, a.v2d_new)(-6.5 * t, 0)), e.is_jumping = !0, e.speed = (0, a.v2d_new)(0, -.7 * Math.abs(e.speed.x)))
                } else e.angle = n, y(e, (0, a.v2d_new)(-5 * t, 0)), e.is_jumping = !0, e.ignore_horizontal = !1;
                e.mirror & o.IF_HFLIP && 1.5
            } else u > 270 && u < 360 && (r.y = d.y - (e.position.x - d.x) * Math.tan(e.angle), e.position.y = r.y + t, e.mirror & o.IF_HFLIP && .2)
        },
        M = (t.actor_handle_slopes = function(e, t) {
            var n = t.brick_ref.angle,
                a = (0, s.timer_get_delta)(),
                i = void 0,
                r = void 0;
            e.is_jumping || (n > 0 && n < 90 ? (i = Math.min(1, Math.tan(n * o.PI / 180)), Math.abs(e.speed.y) > o.EPSILON ? e.speed.x = -3 * i * e.speed.y : (r = (e.mirror & o.IF_HFLIP ? 2 : .8) * i, e.speed.x = Math.max(e.speed.x - r * e.acceleration * a, -e.maxspeed))) : n > 270 && n < 360 && (i = Math.min(1, -Math.tan(n * o.PI / 180)), Math.abs(e.speed.y) > o.EPSILON ? e.speed.x = 3 * i * e.speed.y : (r = (e.mirror & o.IF_HFLIP ? .8 : 2) * i, e.speed.x = Math.min(e.speed.x + r * e.acceleration * a, e.maxspeed))))
        }, t.actor_handle_jumping = function(e, t, n, o, r) {
            var _ = o.brick_ref.angle;
            !(0, i.input_button_down)(e.input, i.IB_FIRE1) || (0, i.input_button_down)(e.input, i.IB_DOWN) || r || (e.angle = n, e.is_jumping = !0, 0 == _ ? e.speed.y = -e.jump_strength : _ > 0 && _ < 90 ? (e.speed.x = Math.min(e.speed.x, -.7 * e.jump_strength), e.speed.y = -.7 * e.jump_strength) : 90 == _ ? (actor.move(e, (0, a.v2d_new)(20 * t, 0)), e.speed.x = Math.min(e.speed.x, -e.jump_strength), e.speed.y = -e.jump_strength / 2) : _ > 90 && _ < 180 ? (actor.move(e, (0, a.v2d_new)(0, -20 * t)), e.speed.x = Math.min(e.speed.x, -.7 * e.jump_strength), e.speed.y = e.jump_strength) : 180 == _ ? (actor.move(e, (0, a.v2d_new)(0, -20 * t)), e.speed.x *= -1, e.speed.y = e.jump_strength) : _ > 180 && _ < 270 ? (actor.move(e, (0, a.v2d_new)(0, -20 * t)), e.speed.x = Math.max(e.speed.x, .7 * e.jump_strength), e.speed.y = e.jump_strength) : 270 == _ ? (actor.move(e, (0, a.v2d_new)(-20 * t, 0)), e.speed.x = Math.max(e.speed.x, e.jump_strength), e.speed.y = -e.jump_strength / 2) : _ > 270 && _ < 360 && (e.speed.x = Math.max(e.speed.x, .7 * e.jump_strength), e.speed.y = -.7 * e.jump_strength))
        }),
        A = t.actor_handle_acceleration = function(e, t, n) {
            var a = (0, s.timer_get_delta)();
            if ((0, i.input_button_down)(e.input, i.IB_LEFT) && !(0, i.input_button_down)(e.input, i.IB_RIGHT)) e.ignore_horizontal || (0, i.input_button_down)(e.input, i.IB_DOWN) || (e.speed.x = Math.max(e.speed.x - (1 - t) * e.acceleration * a, -e.maxspeed), e.mirror = o.IF_HFLIP);
            else if ((0, i.input_button_down)(e.input, i.IB_RIGHT) && !(0, i.input_button_down)(e.input, i.IB_LEFT)) e.ignore_horizontal || (0, i.input_button_down)(e.input, i.IB_DOWN) || (e.speed.x = Math.min(e.speed.x + (1 - t) * e.acceleration * a, e.maxspeed), e.mirror = IF_NONE);
            else if (n) {
                var r = 0,
                    _ = n.brick_ref.angle,
                    c = void 0;
                c = 1, _ % 90 == 0 ? r = 90 == _ && e.mirror & o.IF_HFLIP && e.speed.x < 0 || 270 == _ && !(e.mirror & o.IF_HFLIP) && e.speed.x > 0 ? e.speed.x > o.EPSILON ? 1 : -e.speed.x > o.EPSILON ? -1 : 0 : e.speed.x > o.EPSILON ? -1 : -e.speed.x > o.EPSILON ? 1 : 0 : (_ > 90 && _ < 180 || _ > 180 && _ < 270) && (r = e.speed.x > o.EPSILON ? -1 : -e.speed.x > o.EPSILON ? 1 : 0), e.speed.x += r * c * e.acceleration * a
            }
        },
        j = (t.actor_platform_movement = function(e, t, n) {
            var i = (0, a.v2d_new)(0, 0),
                r = (0, s.timer_get_delta)(),
                _ = 0,
                c = 480,
                d = 0,
                l = 1,
                p = u,
                f = e.position,
                g = void 0,
                v = void 0,
                m = void 0,
                h = void 0,
                b = void 0,
                y = void 0,
                I = void 0,
                E = void 0,
                x = void 0,
                w = void 0,
                S = void 0,
                O = void 0,
                j = void 0,
                B = void 0,
                C = void 0,
                F = void 0,
                H = L(e, p, g, v, m, h, b, y, I, E);
            g = H.up, v = H.upright, m = H.right, h = H.downright, b = H.down, y = H.downleft, I = H.left, E = H.upleft, H = R(e, t, g, v, m, h, b, y, I, E, x, w, S, O, j, B, C, F), x = H.up, w = H.upright, S = H.right, O = H.downright, j = H.down, B = H.downleft, C = H.left, F = H.upleft;
            var G = k(e, p, x, w, S, O, j, B, C, F);
            return x = G.up, w = G.upright, S = G.right, C = G.left, F = G.upleft, j = G.down, B = G.downleft, O = G.downright, N(e, j), null != e.carried_by ? (0, a.v2d_new)(0, 0) : (T(e, f, I, m, C, S), j ? (e.is_jumping = !1, e.ignore_horizontal = !1, M(e, p, _, j, x)) : e.angle = _, i.y = Math.abs(e.speed.y) > o.EPSILON ? e.speed.y * r + n * l * .5 * (r * r) : 0, e.speed.y = Math.min(e.speed.y + n * l * r, c), D(e, f, g, x), P(e, p, _, i, f, d, B, j, O), i.x = Math.abs(e.speed.x) > o.EPSILON ? e.speed.x * r + (1 - d) * e.acceleration * .5 * (r * r) : 0, A(e, d, j), Math.abs(e.speed.x) < o.EPSILON && (e.speed.x = i.x = 0), i)
        }, t.actor_particle_movement = function(e, t) {
            var n = (0, s.timer_get_delta)(),
                o = (0, a.v2d_new)(0, 0);
            return o.x = e.speed.x * n, o.y = e.speed.y * n + .5 * t * n * n, e.speed.y += t * n, o
        }, t.actor_eightdirections_movement = function(e) {
            var t = (0, s.timer_get_delta)(),
                n = (0, a.v2d_new)(0, 0);
            return e.input ? ((0, i.input_button_down)(e.input, i.IB_RIGHT) && !(0, i.input_button_down)(e.input, i.IB_LEFT) && (e.speed.x = Math.min(e.speed.x + e.acceleration * t, e.maxspeed)), (0, i.input_button_down)(e.input, i.IB_LEFT) && !(0, i.input_button_down)(e.input, i.IB_RIGHT) && (e.speed.x = Math.max(e.speed.x - e.acceleration * t, -e.maxspeed)), !(0, i.input_button_down)(e.input, i.IB_LEFT) && !(0, i.input_button_down)(e.input, i.IB_RIGHT) && Math.abs(e.speed.x) > o.EPSILON && (e.speed.x > 0 ? e.speed.x = Math.max(e.speed.x - e.acceleration * t, 0) : e.speed.x = Math.min(e.speed.x + e.acceleration * t, 0)), (0, i.input_button_down)(e.input, i.IB_DOWN) && !(0, i.input_button_down)(e.input, i.IB_UP) && (e.speed.y = Math.min(e.speed.y + e.acceleration * t, e.maxspeed)), (0, i.input_button_down)(e.input, i.IB_UP) && !(0, i.input_button_down)(e.input, i.IB_DOWN) && (e.speed.y = Math.max(e.speed.y - e.acceleration * t, -e.maxspeed)), !(0, i.input_button_down)(e.input, i.IB_UP) && !(0, i.input_button_down)(e.input, i.IB_DOWN) && Math.abs(e.speed.y) > o.EPSILON && (e.speed.y > 0 ? e.speed.y = Math.max(e.speed.y - e.acceleration * t, 0) : e.speed.y = Math.min(e.speed.y + e.acceleration * t, 0))) : e.speed = (0, a.v2d_new)(0, 0), n.x = Math.abs(e.speed.x) > o.EPSILON ? e.speed.x * t + .5 * e.acceleration * t * t : 0, n.y = 0, e.speed.x = n.x, e.speed.y = n.y, n
        }, t.actor_bullet_movement = function(e) {
            var t = (0, s.timer_get_delta)(),
                n = (0, a.v2d_new)(0, 0);
            return n.x = e.speed.x * t, n.y = 0, n
        }, function(e, t) {
            var n = null,
                a = void 0,
                i = void 0,
                r = void 0,
                _ = !1,
                s = void 0,
                c = void 0,
                u = void 0,
                p = void 0;
            for (a = e; a && !_; a = a.next)
                if (a.data) {
                    if (a.data.brick_ref.property == l.BRK_NONE || !a.data.enabled) continue;
                    if (a.data.brick_ref.property == l.BRK_CLOUD && n && n.brick_ref.property == l.BRK_OBSTACLE) continue;
                    if (a.data.brick_ref.behavior == l.BRB_CIRCULAR && n && n.brick_ref.behavior != l.BRB_CIRCULAR && a.data.y >= n.y) continue;
                    if (h && 0 == a.data.brick_ref.angle) continue;
                    if (b && 180 == a.data.brick_ref.angle) continue;
                    if (m && a.data.brick_ref.angle > 0 && a.data.brick_ref.angle < 180) continue;
                    if (v && a.data.brick_ref.angle > 180 && a.data.brick_ref.angle < 360) continue;
                    var y = [a.data.x, a.data.y, a.data.x + a.data.brick_ref.image.width, a.data.y + a.data.brick_ref.image.height];
                    if ((0, d.bounding_box)(t, y))
                        if (a.data.brick_ref.behavior != l.BRB_CIRCULAR && n && n.brick_ref.behavior == l.BRB_CIRCULAR && a.data.y <= n.y) n = a.data;
                        else if (a.data.brick_ref.property == l.BRK_OBSTACLE && n && n.brick_ref.property == l.BRK_CLOUD) n = a.data;
                    else if (a.data.brick_ref.property == l.BRK_CLOUD && n && n.brick_ref.property == l.BRK_CLOUD) a.data.y > n.y && (n = a.data);
                    else if (a.data.brick_ref.angle % 90 == 0) g && n ? f ? n.brick_ref.angle % 180 != 0 && (n = a.data) : n.brick_ref.angle % 180 == 0 && (n = a.data) : n = a.data;
                    else if (g)
                        for (i = a.data.brick_ref.angle, u = Math.tan(i * o.PI / 180), s = t[0]; s <= t[2] && !_; s++)
                            for (c = t[1]; c <= t[3] && !_; c++) {
                                switch (r = !1, parseInt(i / 90, 10) % 4) {
                                    case 0:
                                        p = y[3] + u * (y[0] - s), r = y[0] <= s && s <= y[2] && p <= c && c <= y[3];
                                        break;
                                    case 1:
                                        p = y[3] - u * (y[2] - s), r = y[0] <= s && s <= y[2] && y[1] <= c && c <= p;
                                        break;
                                    case 2:
                                        p = y[3] - u * (y[0] - s), r = y[0] <= s && s <= y[2] && y[1] <= c && c <= p;
                                        break;
                                    case 3:
                                        p = y[3] + u * (y[2] - s), r = y[0] <= s && s <= y[2] && p <= c && c <= y[3]
                                }
                                r && (n = a.data, _ = !0)
                            }
                } return n
        }),
        B = function(e, t, n) {
            var o = void 0,
                i = void 0,
                r = void 0,
                _ = void 0,
                s = void 0,
                c = void 0,
                d = void 0,
                l = void 0,
                u = void 0;
            return r = -t.angle, o = I(t).width, i = I(t).height, l = t.hot_spot, u = t.position, _ = (0, a.v2d_subtract)((0, a.v2d_new)(0, 0), l), s = (0, a.v2d_subtract)((0, a.v2d_new)(o, 0), l), c = (0, a.v2d_subtract)((0, a.v2d_new)(o, i), l), d = (0, a.v2d_subtract)((0, a.v2d_new)(0, i), l), n[0] = (0, a.v2d_add)(u, (0, a.v2d_rotate)(_, r)), n[1] = (0, a.v2d_add)(u, (0, a.v2d_rotate)(s, r)), n[2] = (0, a.v2d_add)(u, (0, a.v2d_rotate)(c, r)), n[3] = (0, a.v2d_add)(u, (0, a.v2d_rotate)(d, r)), n
        },
        C = function(e, t) {
            return e.translate(t, 0), e.scale(-1, 1), e.translate(-t, 0), e
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.v2d_lerp = t.v2d_dotproduct = t.v2d_normalize = t.v2d_magnitude = t.v2d_rotate = t.v2d_multiply = t.v2d_subtract = t.v2d_add = t.v2d_new = void 0;
    var o = n(4),
        a = n(9),
        i = t.v2d_new = function(e, t) {
            return {
                x: e,
                y: t
            }
        },
        r = (t.v2d_add = function(e, t) {
            return {
                x: e.x + t.x,
                y: e.y + t.y
            }
        }, t.v2d_subtract = function(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }, t.v2d_multiply = function(e, t) {
            return {
                x: t * e.x,
                y: t * e.y
            }
        }, t.v2d_rotate = function(e, t) {
            var n = e.x,
                o = e.y,
                a = {};
            return a.x = n * Math.cos(t) - o * Math.sin(t), a.y = o * Math.cos(t) + n * Math.sin(t), a
        }, t.v2d_magnitude = function(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y)
        });
    t.v2d_normalize = function(e) {
        var t = r(e);
        return t > o.EPSILON ? i(e.x / t, e.y / t) : i(0, 0)
    }, t.v2d_dotproduct = function(e, t) {
        return e.x * t.x + e.y * t.y
    }, t.v2d_lerp = function(e, t, n) {
        var o = (0, a.clip)(n, 0, 1),
            r = 1 - o;
        return i(e.x * r + t.x * o, e.y * r + t.y * o)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.timer_get_fps = t.timer_get_ticks = t.timer_get_delta = t.timer_release = t.timer_update = t.timer_init = void 0;
    var o = n(8),
        a = 10,
        i = 16,
        r = void 0,
        _ = void 0,
        s = void 0,
        c = 0,
        d = 0,
        l = 0,
        u = (t.timer_init = function() {
            (0, o.logfile_message)("timer_init()"), r = 0, _ = 0, s = 0, d = 0, c = u()
        }, t.timer_update = function(e) {
            var t = void 0,
                n = void 0;
            for (n = 0; n < a;) t = u(), n = t > c ? t - c : 0, c = t >= c ? c : t;
            n = Math.min(n, i), d = .001 * n, r++, _ += parseInt(n, 10), _ >= 1e3 && (s = r, r = 0, _ = 0), c = u()
        }, t.timer_release = function() {
            (0, o.logfile_message)("timer_release()")
        }, t.timer_get_delta = function() {
            return d
        }, t.timer_get_ticks = function() {
            var e = p();
            return e < l && (l = e), e - l
        }),
        p = (t.timer_get_fps = function() {
            return s
        }, function() {
            return Math.floor(Date.now())
        })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.DATA_ROOT = "", t.GAME_TITLE = "Open Sonic", t.GAME_VERSION = 1, t.GAME_SUB_VERSION = 1, t.GAME_WIP_VERSION = 1, t.GAME_WEBSITE = "http://opensnc.sourceforge.net", t.EPSILON = 1e-4, t.INFINITY = 99999999, t.INFINITY_FLT = 1 / 0, t.INT_MAX = 999999999, t.PI = Math.PI, t.IF_NONE = 0, t.IF_HFLIP = !0, t.IF_VFLIP = !0
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sound_is_playing = t.sound_stop = t.sound_play_ex = t.sound_play = t.sound_load = t.music_is_playing = t.music_get_volume = t.music_set_volume = t.music_resume = t.music_pause = t.music_stop = t.music_play = t.music_load = t.audio_release = t.audio_update = t.audio_init = void 0;
    var o = n(4),
        a = n(17),
        i = n(8),
        r = null,
        _ = (t.audio_init = function() {}, t.audio_update = function() {}, t.audio_release = function() {}, t.music_load = function(e) {
            (0, i.logfile_message)("music_load('%s')", e);
            var t = new Audio;
            return t.src = e, (0, a.resourcemanager_add_music)(e, t), t
        }, t.music_play = function(e, t) {
            s() && _(), null != e && (e.loop = !!t, e.play()), r = e
        }, t.music_stop = function() {
            null != r && r.pause(), r = null
        }),
        s = (t.music_pause = function() {
            null == r || r.is_paused || (r.is_paused = !0, r.pause())
        }, t.music_resume = function() {
            null != r && r.is_paused && (r.is_paused = !1, r.play())
        }, t.music_set_volume = function(e) {
            null != r && (e > 1 && (e = 1), e < 0 && (e = 0), r.volume = e)
        }, t.music_get_volume = function() {
            return null != r ? r.volume : 0
        }, t.music_is_playing = function() {
            return null != r && !r.paused
        }),
        c = (t.sound_load = function(e, t) {
            t = o.DATA_ROOT + t;
            var n = new Audio;
            n.src = t;
            var i = new Audio;
            i.src = t;
            var r = new Audio;
            r.src = t;
            var _ = new Audio;
            return _.src = t, (0, a.resourcemanager_add_sample)(e, n), (0, a.resourcemanager_add_sample)(e + "2", i), (0, a.resourcemanager_add_sample)(e + "3", r), (0, a.resourcemanager_add_sample)(e + "4", _), n
        }, t.sound_play = function(e) {
            c(e, 1, 0, 1, 0)
        }, t.sound_play_ex = function(e, t, n, o, a) {
            e && e.play && e.play()
        });
    t.sound_stop = function(e) {
        e && e.stop()
    }, t.sound_is_playing = function(e) {
        return !!e && !e.paused
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.soundfactory_get = t.soundfactory_release = t.soundfactory_init = void 0;
    var o = n(5),
        a = n(26),
        i = n(8),
        r = n(17),
        _ = {},
        s = (t.soundfactory_init = function() {
            s()
        }, t.soundfactory_release = function() {}, t.soundfactory_get = function(e) {
            var t = (0, a.hashtable_sound_t_find)(_, e);
            return (0, o.sound_is_playing)(t) && (t = (0, a.hashtable_sound_t_find)(_, e + "2"), (0, o.sound_is_playing)(t) && (t = (0, a.hashtable_sound_t_find)(_, e + "3"), (0, o.sound_is_playing)(t) && (t = (0, a.hashtable_sound_t_find)(_, e + "4")))), t
        }, function() {
            (0, i.logfile_message)("soundfactory: loading the samples table..."), (0, r.resourcemanager_getJsonFile)("data/config/samples.json").then(function(e) {
                c(e)
            })
        }),
        c = function(e) {
            for (var t in e) _[t] = d(t, e[t])
        },
        d = function(e, t) {
            var n = l();
            return n.data = (0, o.sound_load)(e, t), n.data2 = (0, o.sound_load)(e, t), n
        },
        l = function() {
            var e = {};
            return e.data = null, e
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.level_set_camera_focus = t.level_get_brick_id = t.level_get_brick_list = t.level_render_entities = t.level_create_animal = t.level_brick_move_actor = t.level_create_particle = t.level_create_enemy = t.level_create_item = t.level_create_brick = t.level_gravity = t.level_restore_music = t.level_unlock_camera = t.level_lock_camera = t.level_kill_all_baddies = t.level_boss_battle = t.level_hide_dialogbox = t.level_call_dialogbox = t.level_add_to_secret_bonus = t.level_clear = t.level_set_spawn_point = t.level_override_music = t.level_size = t.level_add_to_score = t.level_player_id = t.level_player = t.level_editmode = t.level_release = t.level_render = t.level_update = t.level_init = t.level_save = t.level_getfile = t.level_setfile = t.PLAYERS = void 0;
    var o = n(28),
        a = n(74),
        i = n(5),
        r = n(4),
        _ = n(12),
        s = n(13),
        c = n(18),
        d = n(8),
        l = n(17),
        u = n(14),
        p = n(19),
        f = n(6),
        g = n(0),
        v = n(3),
        m = n(9),
        h = n(2),
        b = n(10),
        y = n(1),
        I = n(21),
        E = n(39),
        x = n(23),
        w = n(30),
        S = n(24),
        O = n(15),
        L = n(11),
        k = n(16),
        R = n(22),
        N = t.PLAYERS = [0, 1, 2],
        T = b.VIDEO_SCREEN_W,
        D = 3,
        P = 10,
        M = 7e3,
        A = "data/levels/blue_ocean_1.json",
        j = void 0,
        B = void 0,
        C = void 0,
        F = void 0,
        H = void 0,
        G = void 0,
        V = void 0,
        W = void 0,
        U = [],
        Y = void 0,
        X = void 0,
        K = void 0,
        z = void 0,
        q = void 0,
        $ = null,
        Q = [],
        J = [],
        Z = [],
        ee = void 0,
        te = void 0,
        ne = void 0,
        oe = void 0,
        ae = void 0,
        ie = void 0,
        re = void 0,
        _e = [],
        se = void 0,
        ce = void 0,
        de = {
            position: {
                x: 0,
                y: 0
            }
        },
        le = void 0,
        ue = void 0,
        pe = void 0,
        fe = void 0,
        ge = void 0,
        ve = void 0,
        me = [],
        he = void 0,
        be = void 0,
        ye = void 0,
        Ie = void 0,
        Ee = void 0,
        xe = void 0,
        we = void 0,
        Se = [],
        Oe = void 0,
        Le = void 0,
        ke = void 0,
        Re = void 0,
        Ne = [],
        Te = void 0,
        De = [],
        Pe = void 0,
        Me = void 0,
        Ae = void 0,
        je = void 0,
        Be = void 0,
        Ce = void 0,
        Fe = void 0,
        He = void 0,
        Ge = void 0,
        Ve = [],
        We = (t.level_setfile = function(e) {
            A = e, (0, d.logfile_message)("level_setfile('%s')", e)
        }, t.level_getfile = function() {
            return A
        }, t.level_save = function(e) {
            var t = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                i = void 0,
                r = {
                    name: j,
                    act: W,
                    theme: C,
                    bgtheme: F,
                    grouptheme: H,
                    spawn_point: ee,
                    music: B,
                    boss: null,
                    bricklist: [],
                    itemlist: [],
                    enemylist: [],
                    dialogbox: []
                };
            Rt() && (r.boss = {
                id: le.type,
                x: le.actor.spawn_point.x,
                y: le.actor.spawn_point.y,
                rx: le.rect_x,
                ry: le.rect_y,
                rw: le.rect_w,
                rh: le.rect_h
            });
            var _ = [];
            for (o = $; o; o = o.next) _.push({
                id: Ze(o.data),
                xpos: o.data.sx,
                ypos: o.data.sy
            });
            r.bricklist = _;
            var s = [];
            for (a = Q; a; a = a.next) a.data && s.push({
                id: a.data.type,
                xpos: a.data.actor.spawn_point.x,
                ypos: a.data.actor.spawn_point.y
            });
            r.itemlist = s;
            var c = [];
            for (i = J; i; i = i.next) i.data && i.data.created_from_editor && c.push({
                id: i.data.name,
                xpos: i.data.actor.spawn_point.x,
                ypos: i.data.actor.spawn_point.y
            });
            r.enemylist = c;
            var l = [];
            for (t = 0, n = Ve.length; t < n; t++) l.push({
                xpos: Ve[t].rect_x,
                ypos: Ve[t].rect_y,
                width: Ve[t].rect_w,
                height: Ve[t].rect_h,
                title: Ve[t].title,
                message: Ve[t].message
            });
            r.dialogbox = l;
            var u = e.split("/");
            u = u[u.length - 1], (0, d.logfile_message)("level_save() ok")
        }, t.level_init = function() {
            var e = void 0;
            T = b.VIDEO_SCREEN_W, (0, d.logfile_message)("level_init()"), $ = null, Q = [], _e = [], X = 800, K = z = 0, q = 0, Ge = 0, ne = null, he = !1, ae = !1, ie = "", be = ye = Ie = 0, Se = Oe = Le = 0, Ee = xe = !1, we = !1, re = null, rt(), (0, a.editor_init)(), Nt(A).then(function() {
                for ((0, d.logfile_message)("Creating players..."), e = 0; e < N.length; e++) {
                    var t = (0, k.player_create)(N[e]);
                    t.hit = k.player_hit, t.kill = k.player_kill, t.set_rings = k.player_set_rings, t.get_rings = k.player_get_rings, t.got_glasses = k.player_got_glasses, _e.push(t)
                }
                for (ft(), ce = 0, se = _e[ce], (0, w.camera_init)(), (0, w.camera_set_position)(se.actor.position), Lt(se.actor), (0, k.player_set_rings)(0), ue = !1, pe = !1, (0, d.logfile_message)("Loading hud..."), fe = (0, y.actor_create)(), fe.position = (0, h.v2d_new)(16, 7), fe = (0, y.actor_change_animation)(fe, (0, g.sprite_get_animation)("SD_MAINGUI", 0)), ge = (0, y.actor_create)(), ge.position = (0, h.v2d_new)(16, b.VIDEO_SCREEN_H - 23), ge = (0, y.actor_change_animation)(ge, (0, g.sprite_get_animation)("SD_LIFEGUI", 0)), ve = (0, O.font_create)(0), ve.position = (0, h.v2d_add)(ge.position, (0, h.v2d_new)(32, 11)), e = 0; e < 3; e++) me[e] = (0, O.font_create)(2), me[e].position = (0, h.v2d_add)(fe.position, (0, h.v2d_new)(42, 16 * e + 2));
                for (Pe = (0, y.actor_create)(), Pe.position = (0, h.v2d_new)(0, -240), Pe = (0, y.actor_change_animation)(Pe, (0, g.sprite_get_animation)("SD_LEVELOP", 0)), Me = (0, y.actor_create)(), Me.position = (0, h.v2d_new)(260, 250), Me = (0, y.actor_change_animation)(Me, (0, g.sprite_get_animation)("SD_LEVELACT", W - 1)), Ae = (0, O.font_create)(3), Ae.position = (0, h.v2d_new)(330, 50), (0, O.font_set_text)(Ae, "%s", j.toUpperCase()), (0, O.font_set_width)(Ae, 180), ke = (0, O.font_create)(4), Re = (0, O.font_create)(7), Te = (0, y.actor_create)(), e = 0; e < D; e++) Ne[e] = (0, O.font_create)(2), De[e] = (0, y.actor_create)();
                je = !1, Be = 0, Ce = (0, y.actor_create)(), Ce.position.y = b.VIDEO_SCREEN_H, Ce = (0, y.actor_change_animation)(Ce, (0, g.sprite_get_animation)("SD_DIALOGBOX", 0)), Fe = (0, O.font_create)(8), He = (0, O.font_create)(8)
            })
        }),
        Ue = (t.level_update = function() {
            q += (0, v.timer_get_delta)();
            var e = void 0,
                t = void 0,
                n = !1,
                d = !1,
                l = !1,
                N = (0, v.timer_get_delta)(),
                P = void 0,
                M = void 0,
                A = void 0,
                j = void 0,
                B = void 0,
                C = void 0,
                F = void 0;
            if (wt(), Et(), xt(), (0, a.editor_is_enabled)())(0, a.editor_update)();
            else {
                for (l = q < 5, e = 0; e < _e.length && !l; e++) _e[e] && (l = _e[e].dead);
                if (se && se.actor && (0, s.input_button_pressed)(se.actor.input, s.IB_FIRE4) && !l) {
                    var H = [];
                    return te.pause(), H[0] = (0, c.lang_getstring)("CBOX_QUIT_QUESTION"), H[1] = (0, c.lang_getstring)("CBOX_QUIT_OPTION1"), H[2] = (0, c.lang_getstring)("CBOX_QUIT_OPTION2"), (0, o.confirmbox_alert)(H[0], H[1], H[2]), void(0, u.scenestack_push)((0, p.storyboard_get_scene)(p.SCENE_CONFIRMBOX))
                }
                if (t = (0, o.confirmbox_selected_option)(), 1 == t ? ae = !0 : 2 == t && (0, i.music_play)(te, !0), ae) return (0, b.video_fadefx_over)() ? ((0, u.scenestack_pop)(), void(0, R.quest_abort)()) : void(0, b.video_fadefx_out)((0, _.image_rgb)(0, 0, 0), 1);
                if ((0, a.editor_want_to_activate)()) return void(0, a.editor_enable)();
                for (d = q < 5, e = 0; e < _e.length && !d; e++) d = _e[e].dying || _e[e].dead;
                if (se && (0, s.input_button_pressed)(se.actor.input, s.IB_FIRE3) && !d) return se.spin_dash = se.braking = !1, (0, i.music_pause)(), void(0, u.scenestack_push)((0, p.storyboard_get_scene)(p.SCENE_PAUSE));
                fe = (0, y.actor_change_animation)(fe, (0, g.sprite_get_animation)("SD_MAINGUI", (0, k.player_get_rings)() > 0 ? 0 : 1)), ge = (0, y.actor_change_animation)(ge, (0, g.sprite_get_animation)("SD_LIFEGUI", ce)), ve = (0, O.font_set_text)(ve, "%d", (0, k.player_get_lives)()), (0, O.font_set_text)(me[0], "%d", (0, k.player_get_score)());
                var G = parseInt(q % 60, 10);
                if (G < 10 && (G = "0" + G), (0, O.font_set_text)(me[1], "%s", parseInt(q / 60, 10) + ":" + G), (0, O.font_set_text)(me[2], "%d", (0, k.player_get_rings)()), Pe && (q < 5 ? q < 1.5 ? (Pe.position.y += 360 * N, Pe.position.y > -2 && (Pe.position.y = -2), Ae.position.x -= 320 * N, Ae.position.x < 140 && (Ae.position.x = 140), Me.position.y -= 200 * N, Me.position.y < 200 && (Me.position.y = 200)) : q > 3.5 && (Pe.position.x -= 320 * N) : (Pe.visible = !1, Ae.visible = !1, Me.visible = !1)), he) {
                    var V = 0,
                        W = (0, v.timer_get_ticks)(),
                        U = (0, f.soundfactory_get)("ring count"),
                        Y = (0, f.soundfactory_get)("cash"),
                        X = (0, f.soundfactory_get)("glasses");
                    if (W >= be + 2e3) {
                        for (e = 0; e < _e.length; e++) _e[e] && (_e[e].actor.speed.x = 0);
                        for (ke.position.x = Math.min(ke.position.x + 800 * N, 30), Re.position.x = Math.min(Re.position.x + 700 * N, 12), Te.position.x = Math.max(Te.position.x - 700 * N, 250), e = 0; e < D; e++) De[e].position.x = Math.min(De[e].position.x + (400 - 50 * e) * N, 50), Ne[e].position.x = Math.max(Ne[e].position.x - (400 - 50 * e) * N, 230);
                        V = Le - (Se + Oe), (0, O.font_set_text)(Ne[0], "%d", parseInt(Se, 10)), (0, O.font_set_text)(Ne[1], "%d", parseInt(Oe, 10)), (0, O.font_set_text)(Ne[D - 1], "%d", parseInt(V, 10)), we || ((0, i.music_stop)(), (0, i.sound_play)((0, f.soundfactory_get)("goal")), we = !0)
                    }
                    if (W >= be + 6e3 && !Ee)
                        if (Se = Math.max(0, Se - 400 * N), Oe = Math.max(0, Oe - 2e3 * N), Se > 0 || Oe > 0) U && W >= Ie && (Ie = W + 100, (0, i.sound_play)(U));
                        else
                            for (Ee = !0, ye = W + 4e3, (0, i.sound_play)(Y), e = 0; e < _e.length; e++)
                                if (_e[e].got_glasses) {
                                    (0, i.sound_play)(X);
                                    break
                                } Ee && W >= ye && (xe = !0)
                }
                for (ut(), lt(), n = !1, e = 0; e < _e.length; e++) _e[e].dying && (n = !0);
                for (B = yt(), P = ht(), M = null, (0, I.background_update)(re), C = Q; C; C = C.next)
                    if (C.data && C.data.actor) {
                        var K = C.data.actor.position.x,
                            Z = C.data.actor.position.y,
                            ee = (0, y.actor_image)(C.data.actor).width,
                            ne = (0, y.actor_image)(C.data.actor).height;
                        if (kt(K, Z, ee, ne, T)) {
                            if ((0, L.item_update)(C.data, _e, 3, P, Q, J), C.data.obstacle) {
                                var ie = void 0,
                                    je = void 0,
                                    Be = 1,
                                    Ce = (0, h.v2d_add)(C.data.actor.hot_spot, (0, h.v2d_new)(0, -Be)),
                                    Fe = (0, y.actor_image)(C.data.actor),
                                    He = gt(Fe.width, Fe.height - Be, (0, h.v2d_subtract)(C.data.actor.position, Ce), 0);
                                He.brick_ref.zindex = C.data.bring_to_back ? .4 : .5, ie = {}, ie.next = M, ie.data = He, M = ie, je = {}, je.next = P, je.data = He, P = je
                            }
                        } else C.data.preserve || (C.data.state = L.IS_DEAD)
                    } for (F = J; F; F = F.next)
                    if (F.data) {
                        var Ge = F.data.actor.position.x,
                            Ve = F.data.actor.position.y,
                            We = (0, y.actor_image)(F.data.actor).width,
                            Ue = (0, y.actor_image)(F.data.actor).height;
                        if (kt(Ge, Ve, We, Ue, T) || F.data.always_active) {
                            if (se && se.actor && !(0, s.input_is_ignored)(se.actor.input) && (n || he || (0, S.enemy_update)(F.data, _e, _e.length, P, B, J)), F.data.obstacle) {
                                var Ye = void 0,
                                    Xe = void 0,
                                    Ke = 1,
                                    ze = (0, h.v2d_add)(F.data.actor.hot_spot, (0, h.v2d_new)(0, -Ke)),
                                    qe = (0, y.actor_image)(F.data.actor),
                                    $e = gt(qe.width, qe.height - Ke, (0, h.v2d_subtract)(F.data.actor.position, ze), F.data.obstacle_angle);
                                Ye = {}, Ye.next = M, Ye.data = $e, M = Ye, Xe = {}, Xe.next = P, Xe.data = $e, P = Xe
                            }
                        } else F.data.preserve ? kt(F.data.actor.spawn_point.x, F.data.actor.spawn_point.y, We, Ue, T) || (F.data.actor.position = (0, h.v2d_new)(F.data.actor.spawn_point.x, F.data.actor.spawn_point.y)) : F.data.state = L.IS_DEAD
                    } if (Rt() && se && se.actor) {
                    var Je = se.actor,
                        Ze = [Je.position.x, Je.position.y, Je.position.x + 1, Je.position.y + 1],
                        tt = [le.rect_x, le.rect_y, le.rect_x + le.rect_w, le.rect_y + le.rect_h];
                    if (n || (0, E.boss_update)(le, _e, $), !(0, E.boss_defeated)(le) && (0, m.bounding_box)(Ze, tt) && (ue = !0, pe = !0), !(0, E.boss_defeated)(le)) {
                        var nt = 30,
                            ot = void 0;
                        for (e = 0; e < _e.length; e++)(_e[e] != se || se.actor.carrying) && (ot = _e[e].actor, ot.position.x > le.rect_x - nt && ot.position.x < le.rect_x && (ot.position.x = le.rect_x - nt, ot.speed.x = 0), ot.position.x > le.rect_x + le.rect_w && ot.position.x < le.rect_x + le.rect_w + nt && (ot.position.x = le.rect_x + le.rect_w + nt, ot.speed.x = 0))
                    }((0, E.boss_defeated)(le) || se.dying) && (ue = !1, te && ((0, i.music_set_volume)((0, i.music_get_volume)() - .5 * N), (0, i.music_get_volume)() < r.EPSILON && ((0, i.music_stop)(), (0, i.music_set_volume)(1), oe = !0)))
                }
                for (e = 0; e < _e.length; e++)(0, s.input_ignore)(_e[e].actor.input);
                for (se && se.actor && q >= 3.5 && (0, s.input_restore)(se.actor.input), e = 0; e < _e.length; e++) {
                    var at = _e[e].actor.position.x,
                        it = _e[e].actor.position.y,
                        rt = (0, y.actor_image)(_e[e].actor).width,
                        st = (0, y.actor_image)(_e[e].actor).height,
                        ct = _e[e].actor.hot_spot.y;
                    if (e != ce && (_e[e].getting_hit && pt(e), _e[e].dying && (pt(e), de != _e[e].actor && (0, w.camera_move_to)(_e[e].actor.position, 0))), _e[e].dead) {
                        if (!((0, k.player_get_lives)() > 1)) return (0, u.scenestack_pop)(), void(0, u.scenestack_push)((0, p.storyboard_get_scene)(p.SCENE_GAMEOVER));
                        if ((0, b.video_fadefx_over)()) return (0, k.player_set_lives)((0, k.player_get_lives)() - 1), void et();
                        (0, b.video_fadefx_out)((0, _.image_rgb)(0, 0, 0), 1)
                    }
                    if (xe) {
                        if ((0, b.video_fadefx_over)()) return void(0, u.scenestack_pop)();
                        (0, b.video_fadefx_out)((0, _.image_rgb)(0, 0, 0), 1)
                    }(kt(at, it, rt, st, T / 4) || _e[e].dying) && (!n || _e[e].dying || _e[e].getting_hit) && (0, k.player_update)(_e[e], _e, P), _e[e].actor.position.y < ct && !_e[e].dying ? (_e[e].actor.position.y = ct, _e[e].actor.speed.y = 0) : _e[e].actor.position.y > z - (st - ct) && kt(at, it, rt, st, T / 4) && (0, k.player_kill)(_e[e])
                }
                if (n || he || (q += (0, v.timer_get_delta)() / 1e3, se && (0, s.input_button_pressed)(se.actor.input, s.IB_FIRE2) && (!(Math.abs(se.actor.speed.y) < r.EPSILON) || se.on_moveable_platform || ue || se.disable_movement || se.in_locked_area ? (0, i.sound_play)((0, f.soundfactory_get)("deny")) : pt((ce + 1) % 3))), Rt() && ue) {
                    var ft = se.actor;
                    ft && (ft.position.x < le.rect_x ? (ft.position.x = le.rect_x, ft.speed.x = Math.max(0, ft.speed.x)) : ft.position.x > le.rect_x + le.rect_w && (ft.position.x = le.rect_x + le.rect_w, ft.speed.x = Math.min(ft.speed.x, 0)), ft.position.y = (0, m.clip)(ft.position.y, le.rect_y, le.rect_y + le.rect_h))
                }
                for (_t(P), A = P; A; A = A.next) {
                    if (A.data && A.data.brick_ref.behavior == x.BRB_BREAKABLE) {
                        var vt = A.data.brick_ref.image.width,
                            mt = A.data.brick_ref.image.height,
                            Nt = [A.data.x, A.data.y, A.data.x + vt, A.data.y + mt],
                            Tt = [A.data.x, A.data.y, A.data.x + vt, A.data.y + mt];
                        for (e = 0; e < _e.length; e++)
                            if (_e[e] && (Nt[0] = _e[e].actor.position.x - _e[e].actor.hot_spot.x - 3, Nt[1] = _e[e].actor.position.y - _e[e].actor.hot_spot.y - 3, Nt[2] = Nt[0] + (0, y.actor_image)(_e[e].actor).width + 6, Nt[3] = Nt[1] + (0, y.actor_image)(_e[e].actor).height + 6, (_e[e].spin_dash || _e[e].spin || _e[e].type == k.PL_KNUCKLES) && (0, m.bounding_box)(Nt, Tt))) {
                                var Dt = void 0,
                                    Pt = void 0,
                                    Mt = void 0,
                                    At = void 0;
                                for (At = Math.max(A.data.brick_ref.behavior_arg[0], 1), Mt = Math.max(A.data.brick_ref.behavior_arg[1], 1), Dt = 0; Dt < At; Dt++)
                                    for (Pt = 0; Pt < Mt; Pt++) {
                                        var jt = (0, h.v2d_new)(A.data.x + Dt * vt / At, A.data.y + Pt * mt / Mt),
                                            Bt = (0, h.v2d_new)(.3 * -_e[e].actor.speed.x, -100 - (0, m.random)(50)),
                                            Ct = (0, _.image_create)(vt / At, mt / Mt);
                                        Math.abs(Bt.x) > r.EPSILON && (Bt.x += (Bt.x > 0 ? 1 : -1) * (0, m.random)(50)), Qe(Ct, jt, Bt, !1)
                                    }(0, i.sound_play)((0, f.soundfactory_get)("break")), A.data.state = x.BRS_DEAD
                            }
                    }
                    if (A.data && A.data.brick_ref.behavior == x.BRB_FALL && A.data.state == x.BRS_ACTIVE) {
                        var Ft = A.data;
                        if (Ft.value[1] += (0, v.timer_get_delta)(), Ft.value[1] >= x.BRB_FALL_TIME) {
                            var Ht = void 0,
                                Gt = void 0,
                                Vt = void 0,
                                Wt = void 0,
                                Ut = 0 != parseInt(Ft.brick_ref.behavior_arg[2], 10),
                                Yt = Ft.brick_ref.image;
                            for (Vt = Math.max(Ft.brick_ref.behavior_arg[0], 1), Wt = Math.max(Ft.brick_ref.behavior_arg[1], 1), Ht = 0; Ht < Vt; Ht++)
                                for (Gt = 0; Gt < Wt; Gt++) {
                                    var Xt = (0, h.v2d_new)(Ft.x + Ht * Yt.width / Vt, Ft.y + Gt * Yt.height / Wt),
                                        Kt = (0, h.v2d_new)(0, 20 + 20 * Gt + 20 * (Ut ? Ht : Vt - Ht)),
                                        zt = (0, _.image_create)(Yt.width / Vt, Yt.height / Wt);
                                    Qe(zt, Xt, Kt, !1)
                                }(0, i.sound_play)((0, f.soundfactory_get)("break")), Ft.state = x.BRS_DEAD
                        }
                    }
                    Ot(A.data)
                }
                for (A = M; A; A = j) j = A.next, St(A.data), A = null;
                if (M = null, bt(P), It(B), se && se.actor && Lt(se.actor), he)(0, w.camera_move_to)((0, h.v2d_add)(de.position, (0, h.v2d_new)(0, -90)), .17);
                else if (ue) {
                    var qt = [le.rect_x + b.VIDEO_SCREEN_W / 2, le.rect_x + le.rect_w - b.VIDEO_SCREEN_W / 2],
                        $t = (0, h.v2d_new)((0, m.clip)(de.position.x, qt[0], qt[1]), de.position.y);
                    (0, w.camera_move_to)((0, h.v2d_add)($t, (0, h.v2d_new)(0, -90)), .17)
                } else n || (0, w.camera_move_to)(de.position, .1);
                (0, w.camera_update)()
            }
            dt()
        }, t.level_render = function() {
            if ((0, b.video_clearDisplay)(), (0, a.editor_is_enabled)()) return void(0, a.editor_render)();
            (0, I.background_render_bg)(re, (0, w.camera_get_position)()), tt(), (0, I.background_render_fg)(re, (0, w.camera_get_position)()), ot()
        }, t.level_release = function() {
            var e;
            for ((0, d.logfile_message)("level_release()"), (0, _.image_destroy)(ie), Je(), e = 0; e < _e.length; e++)(0, k.player_destroy)(_e[e]);
            for ((0, w.camera_release)(), (0, a.editor_release)(), (0, y.actor_destroy)(ge), (0, y.actor_destroy)(fe), (0, O.font_destroy)(ve), e = 0; e < _e.length; e++)(0, O.font_destroy)(me[e]);
            for ((0, y.actor_destroy)(Pe), (0, y.actor_destroy)(Me), (0, O.font_destroy)(Ae), (0, O.font_destroy)(ke), (0, O.font_destroy)(Re), (0, y.actor_destroy)(Te), e = 0; e < D; e++)(0, O.font_destroy)(Ne[e]), (0, y.actor_destroy)(De[e]);
            (0, O.font_destroy)(Fe), (0, O.font_destroy)(He), (0, y.actor_destroy)(Ce), (0, d.logfile_message)("level_release() ok")
        }),
        Ye = (t.level_editmode = function() {
            return (0, a.editor_is_enabled)()
        }, t.level_player = function() {
            return se
        }, t.level_player_id = function() {
            return ce
        }, t.level_add_to_score = function(e) {
            var t = void 0;
            e = Math.max(0, e), (0, k.player_set_score)((0, k.player_get_score)() + e), t = qe(L.IT_FLYINGTEXT, (0, h.v2d_add)(se.actor.position, (0, h.v2d_new)(-9, 0))), t.set_text(t, e)
        }, t.level_size = function() {
            return (0, h.v2d_new)(K, z)
        }, t.level_override_music = function(e) {
            te && (0, i.music_stop)(), ne = e, (0, i.sound_play)(ne)
        }, t.level_set_spawn_point = function(e) {
            ee = (0, h.v2d_new)(e.x, e.y)
        }, t.level_clear = function(e) {
            var t = void 0;
            if (!he) {
                for (he = !0, be = (0, v.timer_get_ticks)(), Se = 10 * (0, k.player_get_rings)(), Le += Se, t = 0; t < _e.length; t++) _e[t] && _e[t].got_glasses && Ye(5e3);
                for ((0, k.player_set_score)((0, k.player_get_score)() + Le), t = 0; t < _e.length; t++) _e[t] && ((0, s.input_ignore)(_e[t].actor.input), _e[t].spin_dash = !1);
                for (Lt(e), Ke(), ke = (0, O.font_set_text)(ke, "TEAM SONIC"), ke.position = (0, h.v2d_new)(-500, 20), Re = (0, O.font_set_text)(Re, "GOT THROUGH"), Re.position = (0, h.v2d_new)(-500, 46), Te = (0, y.actor_change_animation)(Te, (0, g.sprite_get_animation)("SD_LEVELACT", W - 1)), Te.position = (0, h.v2d_new)(820, 25), t = 0; t < D; t++) De[t].position = (0, h.v2d_new)(-500, 120 + 20 * t), Ne[t].position = (0, h.v2d_new)(820, 120 + 20 * t);
                De[0] = (0, y.actor_change_animation)(De[0], (0, g.sprite_get_animation)("SD_RINGBONUS", 0)), De[1] = (0, y.actor_change_animation)(De[1], (0, g.sprite_get_animation)("SD_SECRETBONUS", 0)), De[D - 1] = (0, y.actor_change_animation)(De[D - 1], (0, g.sprite_get_animation)("SD_TOTAL", 0))
            }
        }, t.level_add_to_secret_bonus = function(e) {
            Oe += e, Le += e
        }),
        Xe = t.level_call_dialogbox = function(e, t) {
            (!je || (0, O.font_get_text)(Fe) || (0, O.font_get_text)(He)) && (je = !0, Be = (0, v.timer_get_ticks)(), (0, O.font_set_text)(Fe, e), (0, O.font_set_text)(He, t), (0, O.font_set_width)(He, 260))
        },
        Ke = t.level_hide_dialogbox = function() {
            je = !1
        },
        ze = (t.level_boss_battle = function() {
            return pe
        }, t.level_kill_all_baddies = function() {
            var e = void 0,
                t = void 0;
            for (e = J; e; e = e.next)(t = e.data) && (t.state = 1)
        }, t.level_lock_camera = function(e, t, n, o) {
            (0, w.camera_lock)(e + b.VIDEO_SCREEN_W / 2, t + b.VIDEO_SCREEN_H / 2, n - b.VIDEO_SCREEN_W / 2, o - b.VIDEO_SCREEN_H / 2)
        }, t.level_unlock_camera = function() {
            (0, w.camera_unlock)()
        }, t.level_restore_music = function() {
            null != te && (0, i.music_stop)()
        }, t.level_gravity = function() {
            return X
        }, t.level_create_brick = function(e, t) {
            var n = void 0,
                o = void 0;
            for (o = {}, o.data = {}, o.data.brick_ref = (0, x.brick_get)(e), o.data.animation_frame = 0, o.data.x = o.data.sx = parseInt(t.x, 10), o.data.y = o.data.sy = parseInt(t.y, 10), o.data.enabled = !0, o.data.state = x.BRS_IDLE, o.data.value = [], n = 0; n < x.BRICK_MAXVALUES; n++) o.data.value[n] = 0;
            return mt(o), o.data
        }),
        qe = t.level_create_item = function(e, t) {
            var n = {};
            return n.data = (0, L.item_create)(e), n.data && (n.data.actor.spawn_point = (0, h.v2d_new)(t.x, t.y), n.data.actor.position = (0, h.v2d_new)(t.x, t.y)), n.next = Q, Q = n, n.data
        },
        $e = t.level_create_enemy = function(e, t) {
            var n = void 0,
                o = (0, h.v2d_new)(t.x, t.y);
            return n = {}, n.data = (0, S.enemy_create)(e), n.data.actor.spawn_point = (0, h.v2d_new)(o.x, o.y), n.data.actor.position = (0, h.v2d_new)(o.x, o.y), n.next = J, J = n, n.data
        },
        Qe = t.level_create_particle = function(e, t, n, o) {
            var i = void 0,
                r = void 0;
            if ((0, a.editor_is_enabled)()) return void(0, _.image_destroy)(e);
            i = {}, i.image = e, i.position = t, i.speed = n, i.destroy_on_brick = o, r = {}, r.data = i, r.next = Z, Z = r
        },
        Je = (t.level_brick_move_actor = function(e, t) {
            var n = void 0,
                o = void 0,
                a = void 0,
                i = void 0,
                _ = void 0,
                s = void 0;
            if (!e) return (0, h.v2d_new)(0, 0);
            switch (n = e.value[0], e.brick_ref.behavior) {
                case x.BRB_CIRCULAR:
                    return o = e.brick_ref.behavior_arg[0], a = e.brick_ref.behavior_arg[1], i = e.brick_ref.behavior_arg[2] * (2 * r.PI), _ = e.brick_ref.behavior_arg[3] * (2 * r.PI), s = e.brick_ref.behavior_arg[4] * r.PI / 180, (0, h.v2d_new)(-o * i * Math.sin(i * n + s), a * _ * Math.cos(_ * n + s));
                default:
                    return (0, h.v2d_new)(0, 0)
            }
        }, t.level_create_animal = function(e) {
            return qe(L.IT_ANIMAL, e)
        }, t.level_render_entities = function() {
            tt()
        }, t.level_get_brick_list = function() {
            return $
        }, t.level_get_brick_id = function(e) {
            return Ze(e)
        }, function() {
            var e = void 0,
                t = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                i = void 0;
            for ((0, d.logfile_message)("level_unload()"), te.pause(), (0, d.logfile_message)("releasing brick list..."), e = $; e; e = t) t = e.next, e.data = null, e = null;
            for ($ = null, (0, d.logfile_message)("releasing item list..."), n = Q; n; n = o) o = n.next, (0, L.item_destroy)(n.data), n = null;
            for (Q = null, (0, d.logfile_message)("releasing enemy list..."), a = J; a; a = i) i = a.next, (0, S.enemy_destroy)(a.data), a = null;
            J = null, Rt() && ((0, d.logfile_message)("releasing the boss..."), (0, E.boss_destroy)(le), le = null), (0, d.logfile_message)("unloading the brickset..."), (0, d.logfile_message)("unloading the background..."), (0, d.logfile_message)("level_unload() ok")
        }),
        Ze = function(e) {
            var t = void 0;
            for (t = 0; t < (0, x.brick_size)(); t++)
                if (e.brick_ref == (0, x.brick_get)(t)) return t;
            return -1
        },
        et = function() {
            var e = ee;
            Ue(), We(), ee = e
        },
        tt = function() {
            var e = void 0,
                t = void 0,
                n = void 0,
                o = void 0;
            e = ht();
            var a = {};
            for (t = e; t; t = t.next)
                if (t.data) {
                    var i = t.data.brick_ref;
                    i.zindex < .5 && (t.data = (0, x.brick_animate)(t.data), a = (0, x.brick_image)(t.data), (0, b.video_get_backbuffer)().drawImage(a.data, a.sx, a.sy, a.swidth, a.sheight, t.data.x - (parseInt((0, w.camera_get_position)().x, 10) - b.VIDEO_SCREEN_W / 2), t.data.y - (parseInt((0, w.camera_get_position)().y, 10) - b.VIDEO_SCREEN_H / 2), a.width * b.VIDEO_SCALE, a.height * b.VIDEO_SCALE))
                } for (nt(!0), t = e; t; t = t.next)
                if (t.data) {
                    var _ = t.data.brick_ref;
                    Math.abs(_.zindex - .5) < r.EPSILON && _.property != x.BRK_OBSTACLE && (t.data = (0, x.brick_animate)(t.data), a = (0, x.brick_image)(t.data), (0, b.video_get_backbuffer)().drawImage(a.data, a.sx, a.sy, a.swidth, a.sheight, t.data.x - (parseInt((0, w.camera_get_position)().x, 10) - b.VIDEO_SCREEN_W / 2), t.data.y - (parseInt((0, w.camera_get_position)().y, 10) - b.VIDEO_SCREEN_H / 2), a.width * b.VIDEO_SCALE, a.height * b.VIDEO_SCALE))
                } for (n = Q; n; n = n.next) n.data && n.data.bring_to_back && (0, L.item_render)(n.data, (0, w.camera_get_position)());
            for (t = e; t; t = t.next)
                if (t.data) {
                    var s = t.data.brick_ref;
                    Math.abs(s.zindex - .5) < r.EPSILON && s.property == x.BRK_OBSTACLE && (t.data = (0, x.brick_animate)(t.data), a = (0, x.brick_image)(t.data), (0, b.video_get_backbuffer)().drawImage(a.data, a.sx, a.sy, a.swidth, a.sheight, t.data.x - (parseInt((0, w.camera_get_position)().x, 10) - b.VIDEO_SCREEN_W / 2), t.data.y - (parseInt((0, w.camera_get_position)().y, 10) - b.VIDEO_SCREEN_H / 2), a.width * b.VIDEO_SCALE, a.height * b.VIDEO_SCALE))
                } for (Rt() && !le.bring_to_front && (0, E.boss_render)(le, (0, w.camera_get_position)()), o = J; o; o = o.next)(0, S.enemy_render)(o.data, (0, w.camera_get_position)());
            for (nt(!1), Rt() && le.bring_to_front && (0, E.boss_render)(le, (0, w.camera_get_position)()), n = Q; n; n = n.next) n.data && (0, L.item_render)(n.data, (0, w.camera_get_position)());
            for (st(), t = e; t; t = t.next)
                if (t.data) {
                    var c = t.data.brick_ref;
                    c.zindex > .5 && (t.data = (0, x.brick_animate)(t.data), a = (0, x.brick_image)(t.data), (0, b.video_get_backbuffer)().drawImage(a.data, a.sx, a.sy, a.swidth, a.sheight, t.data.x - (parseInt((0, w.camera_get_position)().x, 10) - b.VIDEO_SCREEN_W / 2), t.data.y - (parseInt((0, w.camera_get_position)().y, 10) - b.VIDEO_SCREEN_H / 2), a.width * b.VIDEO_SCALE, a.height * b.VIDEO_SCALE))
                } bt(e)
        },
        nt = function(e) {
            if (se) {
                var t = void 0;
                for (t = _e.length - 1; t >= 0; t--) _e[t] != se && !!_e[t].bring_to_back == e && (0, k.player_render)(_e[t], (0, w.camera_get_position)());
                !!k.player_bring_to_back == e && (0, k.player_render)(se, (0, w.camera_get_position)())
            }
        },
        ot = function() {
            var e = void 0,
                t = (0, h.v2d_new)(b.VIDEO_SCREEN_W / 2, b.VIDEO_SCREEN_H / 2);
            if (he)
                for ((0, y.actor_render)(Te, t), (0, O.font_render)(ke, t), (0, O.font_render)(Re, t), e = 0; e < D; e++)(0, y.actor_render)(De[e], t), (0, O.font_render)(Ne[e], t);
            else {
                for ((0, y.actor_render)(fe, t), (0, y.actor_render)(ge, t), (0, O.font_render)(ve, t), e = 0; e < 3; e++)(0, O.font_render)(me[e], t);
                at()
            }
            q < 2.5 && (0, b.video_clearDisplay)("rgb(0,0,0)"), (0, y.actor_render)(Pe, t), (0, y.actor_render)(Me, t), (0, O.font_render)(Ae, t), it(t)
        },
        at = function() {
            var e = [],
                t = [],
                n = void 0,
                o = 0,
                a = .001 * (0, v.timer_get_ticks)();
            for (n = 0; n < P; n++) t[n] = !0;
            if (se) {
                switch (se.got_glasses && (e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 6), 0)), se.shield_type) {
                    case k.SH_SHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 7), 0);
                        break;
                    case k.SH_FIRESHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 11), 0);
                        break;
                    case k.SH_THUNDERSHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 12), 0);
                        break;
                    case k.SH_WATERSHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 13), 0);
                        break;
                    case k.SH_ACIDSHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 14), 0);
                        break;
                    case k.SH_WINDSHIELD:
                        e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 15), 0)
                }
                if (se.invincible && (e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 4), 0), se.invtimer >= .75 * k.PLAYER_MAX_INVINCIBILITY)) {
                    var i = (k.PLAYER_MAX_INVINCIBILITY - se.invtimer) / (.25 * k.PLAYER_MAX_INVINCIBILITY);
                    t[o - 1] = Math.sin(.5 * r.PI * a / (i + .1)) >= 0
                }
                if (se.got_speedshoes && (e[o++] = (0, g.sprite_get_image)((0, g.sprite_get_animation)("SD_ICON", 5), 0), se.speedshoes_timer >= .75 * k.PLAYER_MAX_SPEEDSHOES)) {
                    var s = (k.PLAYER_MAX_SPEEDSHOES - se.speedshoes_timer) / (.25 * k.PLAYER_MAX_SPEEDSHOES);
                    t[o - 1] = Math.sin(.5 * r.PI * a / (s + .1)) >= 0
                }
            }
            for (n = 0; n < o; n++) t[n] && (0, _.image_blit)(e[n].data, (0, b.video_get_backbuffer)(), e[n].sx, e[n].sy, b.VIDEO_SCREEN_W - (e[n].width + 5) * (n + 1), 5, e[n].swidth, e[n].sheight)
        },
        it = function(e) {
            (0, y.actor_render)(Ce, e), (0, O.font_render)(Fe, e), (0, O.font_render)(He, e)
        },
        rt = function() {
            Z = null
        },
        _t = function(e) {
            var t = (0, v.timer_get_delta)(),
                n = X,
                o = void 0,
                a = void 0,
                i = void 0,
                r = null,
                _ = void 0,
                s = void 0;
            for (i = Z; i; i = _)
                if (s = i.data) {
                    if (a = kt(s.position.x, s.position.y, s.position.x + s.image.width, s.position.y + s.image.height, T), o = !1, s.destroy_on_brick && a && s.speed.y > 0) {
                        var c = [s.position.x, s.position.y, s.position.x + s.image.width, s.position.y + s.image.height],
                            d = void 0;
                        for (d = e; d && !o; d = d.next) {
                            var l = d.data;
                            if (l && l.brick_ref.property == x.BRK_OBSTACLE && 0 == l.brick_ref.angle) {
                                var u = [l.x, l.y, l.x + l.brick_ref.image.width, l.y + l.brick_ref.image.height];
                                (0, m.bounding_box)(c, u) && (o = !0)
                            }
                        }
                    }!a || o ? r ? r.next = _ : Z = _ : (s.position.x += s.speed.x * t, s.position.y += s.speed.y * t + .5 * n * (t * t), s.speed.y += n * t, r = i)
                }
        },
        st = function() {
            var e = void 0,
                t = void 0,
                n = (0, h.v2d_new)((0, w.camera_get_position)().x - b.VIDEO_SCREEN_W / 2, (0, w.camera_get_position)().y - b.VIDEO_SCREEN_H / 2);
            for (e = Z; e; e = e.next)(t = e.data) && (0, _.image_draw)(t.image, (0, b.video_get_backbuffer)(), parseInt(t.position.x - n.x, 10), parseInt(t.position.y - n.y, 10), r.IF_NONE)
        },
        ct = function() {
            var e = void 0,
                t = void 0,
                n = void 0;
            for (e = t = -r.INFINITY, n = $; n; n = n.next) n.data && n.data.brick_ref && "BRK_NONE" != n.data.brick_ref.property && (e = Math.max(e, n.data.sx + (0, x.brick_image)(n.data).width), t = Math.max(t, n.data.sy + (0, x.brick_image)(n.data).height));
            K = Math.max(e, b.VIDEO_SCREEN_W), z = Math.max(t, b.VIDEO_SCREEN_H)
        },
        dt = function() {
            null == te || he || oe || (0, i.music_is_playing)() || (ne = null, (0, i.music_play)(te, !0))
        },
        lt = function() {
            if (Ce) {
                var e = 100,
                    t = (0, v.timer_get_delta)(),
                    n = (0, v.timer_get_ticks)();
                if (je) {
                    if (n >= Be + M) return void(je = !1);
                    Ce.position.x = (b.VIDEO_SCREEN_W - (0, y.actor_image)(Ce).width) / 2, Ce.position.y = Math.max(Ce.position.y - e * t, b.VIDEO_SCREEN_H - 1.3 * (0, y.actor_image)(Ce).height)
                } else Ce.position.y = Math.min(Ce.position.y + e * t, b.VIDEO_SCREEN_H);
                Fe.position = (0, h.v2d_add)(Ce.position, (0, h.v2d_new)(2, 10)), He.position = (0, h.v2d_add)(Ce.position, (0, h.v2d_new)(2, 23))
            }
        },
        ut = function() {
            if (se && se.actor) {
                var e = void 0,
                    t = [],
                    n = [];
                if (!(q < 2))
                    for (t[0] = se.actor.position.x, t[1] = se.actor.position.y, t[2] = t[0] + (0, y.actor_image)(se.actor).width, t[3] = t[1] + (0, y.actor_image)(se.actor).height, e = 0; e < Ge; e++)
                        if (!Ve[e].disabled && (n[0] = Ve[e].rect_x, n[1] = Ve[e].rect_y, n[2] = n[0] + Ve[e].rect_w, n[3] = n[1] + Ve[e].rect_h, (0, m.bounding_box)(t, n))) {
                            Ve[e].disabled = !0, Xe(Ve[e].title, Ve[e].message);
                            break
                        }
            }
        },
        pt = function(e) {
            se.spin_dash = se.braking = !1, ce = e, _e[ce] && (se = _e[ce], Lt(se.actor), (0, s.input_restore)(se.actor.input))
        },
        ft = function() {
            var e = void 0,
                t = void 0;
            for (e = 0; e < _e.length; e++) t = parseInt(ee.x, 10) <= K / 2 ? 2 - e : e, _e[e].actor.mirror = parseInt(ee.x, 10) <= K / 2 ? r.IF_NONE : r.IF_HFLIP, _e[e].actor.spawn_point.x = _e[e].actor.position.x = ee.x + 15 * t, _e[e].actor.spawn_point.y = _e[e].actor.position.y = ee.y
        },
        gt = function(e, t, n, o) {
            var a = void 0,
                i = {},
                r = {};
            for (r.data = null, r.image = (0, _.image_create)(e, t), r.angle = o, r.property = x.BRK_OBSTACLE, r.behavior = x.BRB_DEFAULT, r.zindex = .5, r.behavior_arg = [], a = 0; a < x.BRICKBEHAVIOR_MAXARGS; a++) r.behavior_arg[a] = 0;
            for (i.brick_ref = r, i.animation_frame = 0, i.enabled = !0, i.x = i.sx = parseInt(n.x, 10), i.y = i.sy = parseInt(n.y, 10), i.value = [], a = 0; a < x.BRICK_MAXVALUES; a++) i.value[a] = 0;
            return i
        },
        vt = function(e, t) {
            var n = e.brick_ref,
                o = t.brick_ref;
            if (!n || !o) return !1;
            if (n.zindex < o.zindex) return -1;
            if (n.zindex > o.zindex) return 1;
            if (n.property != o.property) {
                var a = [0, 100, 50];
                return a[n.property] - a[o.property]
            }
            return n.angle % 180 != 0 && o.angle % 180 == 0 ? -1 : n.angle % 180 == 0 && o.angle % 180 != 0 ? 1 : e.sy - t.sy
        },
        mt = function(e) {
            var t = void 0;
            if ($)
                if (vt(e.data, $.data) >= 0) e.next = $, $ = e;
                else {
                    for (t = $; t.next && vt(t.next.data, e.data) > 0;) t = t.next;
                    e.next = t.next, t.next = e
                }
            else e.next = null, $ = e
        },
        ht = function() {
            var e = [],
                t = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                i = void 0,
                r = void 0;
            for (t = $; t; t = t.next) t.data && t.data.brick_ref && t.data.brick_ref.image && (o = Math.min(t.data.x, t.data.sx), a = Math.min(t.data.y, t.data.sy), i = t.data.brick_ref.image.width, r = t.data.brick_ref.image.height, (kt(o, a, i, r, 2 * T) || t.data.brick_ref.behavior == x.BRB_CIRCULAR) && (n = {}, n.data = t.data, n.next = e, e = n));
            return e
        },
        bt = function(e) {
            for (var t = void 0; e;) t = e.next, e = null, e = t
        },
        yt = function() {
            var e = null,
                t = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                i = void 0,
                r = void 0,
                _ = void 0;
            for (t = Q; t; t = t.next) t.data && (_ = (0, y.actor_image)(t.data.actor)) && (o = parseInt(t.data.actor.position.x, 10), a = parseInt(t.data.actor.position.y, 10), i = _.width, r = _.height, kt(o, a, i, r, T) && (n = {}, n.data = t.data, n.next = e, e = n));
            return e
        },
        It = function(e) {
            for (var t = void 0; e;) t = e.next, e = null, e = t
        },
        Et = function() {
            var e = void 0,
                t = void 0;
            if (Q)
                for (Q.data && Q.data.state == L.IS_DEAD && (t = Q.next, (0, L.item_destroy)(Q.data), Q = t), e = Q; e && e.next; e = e.next) e.next && e.next.data && e.next.data.state == L.IS_DEAD && (t = e.next, e.next = t.next, (0, L.item_destroy)(t.data), t = null)
        },
        xt = function() {
            var e = void 0,
                t = void 0;
            if (J)
                for (J && J.data && J.data.state == S.ES_DEAD && (t = J.next, (0, S.enemy_destroy)(J.data), J = null, J = t), e = J; e && e.next; e = e.next) e && e.next && e.next.data && e.next.data.state == S.ES_DEAD && (t = e.next, e.next = t.next, (0, S.enemy_destroy)(t.data), t = null)
        },
        wt = function() {
            var e = void 0,
                t = void 0;
            if ($)
                for ($.data && $.data.state == x.BRS_DEAD && (t = $.next, $.data = null, $ = null, $ = t), e = $; e && e.next; e = e.next) e.next.data.state == x.BRS_DEAD && (t = e.next, e.next = t.next, t.data = null, t = null)
        },
        St = function(e) {
            (0, _.image_destroy)(e.brick_ref.image), e.brick_ref = null, e = null
        },
        Ot = function(e) {
            var t = void 0,
                n = void 0,
                o = void 0,
                a = void 0,
                i = void 0,
                _ = void 0;
            if (e) switch (e.value[0] += (0, v.timer_get_delta)(), t = e.value[0], e.brick_ref.behavior) {
                case x.BRB_CIRCULAR:
                    n = e.brick_ref.behavior_arg[0], o = e.brick_ref.behavior_arg[1], a = e.brick_ref.behavior_arg[2] * (2 * r.PI), i = e.brick_ref.behavior_arg[3] * (2 * r.PI), _ = e.brick_ref.behavior_arg[4] * r.PI / 180, e.x = e.sx + Math.round(n * Math.cos(a * t + _)), e.y = e.sy + Math.round(o * Math.sin(i * t + _))
            }
        },
        Lt = t.level_set_camera_focus = function(e) {
            de = {
                position: {
                    x: e.position.x,
                    y: e.position.y
                }
            }
        },
        kt = function(e, t, n, o, a) {
            var i = (0, w.camera_get_position)(),
                r = [e, t, e + n, t + o],
                _ = [i.x - b.VIDEO_SCREEN_W / 2 - a, i.y - b.VIDEO_SCREEN_H / 2 - a, i.x + b.VIDEO_SCREEN_W / 2 + a, i.y + b.VIDEO_SCREEN_H / 2 + a];
            return (0, m.bounding_box)(r, _)
        },
        Rt = function() {
            return null != le
        },
        Nt = function(e) {
            return j = "Untitled", B = "", C = "", F = "", G = "", V = "", H = "", ee = (0, h.v2d_new)(0, 0), Ge = 0, le = null, W = 1, Y = !1, new Promise(function(t, n) {
                (0, d.logfile_message)('level_load("%s")', e), (0, l.resourcemanager_getJsonFile)(e).then(Tt).then(function() {
                    te = (0, i.music_load)(B), ct(), (0, d.logfile_message)("level_load() ok"), t()
                })
            })
        },
        Tt = function(e) {
            C = e.theme, F = e.bgtheme, H = e.grouptheme, B = e.music, j = e.name, G = e.author, V = e.version, U = e.requires, W = e.act, ee = e.spawn_point, Y = e.readonly;
            var t = void 0;
            for (e.boss && (le = (0, E.boss_create)(e.boss.id, (0, h.v2d_new)(e.boss.x, e.boss.y), e.boss.rx, e.boss.ry, e.boss.rw, e.boss.rh)), t = 0; t < e.dialogbox.length; t++) {
                var n = {};
                n.disabled = !1, n.rect_x = e.dialogbox[t].xpos, n.rect_y = e.dialogbox[t].ypos, n.rect_w = e.dialogbox[t].width, n.rect_h = e.dialogbox[t].height, n.title = (0, c.lang_get)(e.dialogbox[t].title), n.message = (0, c.lang_get)(e.dialogbox[t].message), Ve.push(n), Ge = Ve.length
            }
            for (t = 0; t < e.enemylist.length; t++) $e(e.enemylist[t].id, (0, h.v2d_new)(e.enemylist[t].xpos, e.enemylist[t].ypos));
            return new Promise(function(n, o) {
                (0, x.brick_load)(e.theme).then(function(o) {
                    for (var a = 0; a < e.bricklist.length; a++) ze(e.bricklist[a].id, (0, h.v2d_new)(e.bricklist[a].xpos, e.bricklist[a].ypos));
                    (0, I.background_load)(e.bgtheme).then(function(o) {
                        for (re = o, t = 0; t < e.itemlist.length; t++) Q[t] = qe(e.itemlist[t].id, (0, h.v2d_new)(e.itemlist[t].xpos, e.itemlist[t].ypos));
                        n()
                    })
                })
            })
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = arguments,
        a = !0;
    t.logfile_message = function(e) {
        if (!a) return !1;
        o.length
    }, t.logfile_fatal_error = function(e) {
        if (!a) return !1;
        o.length
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.old_school_angle = t.swap = t.circular_collision = t.bounding_box = t.clip = t.random = t.isInArray = t.isArray = t.isspace = t.runAnimation = void 0;
    var o = n(4),
        a = n(2),
        i = (t.runAnimation = function(e) {
            function t(o) {
                var a = !1;
                if (null != n) {
                    a = e(Math.min(o - n, 100) / 1e3) === !1
                }
                n = o, a || requestAnimationFrame(t)
            }
            var n = null;
            requestAnimationFrame(t)
        }, t.isspace = function(e) {
            return " " == e
        }, t.isArray = function(e) {
            return void 0 !== e && e && e.constructor === Array
        }, t.isInArray = function(e, t) {
            return t.indexOf(e) > -1
        }, t.random = function(e) {
            return i(parseInt(Math.random(e) * e, 10), 1, e)
        }, t.clip = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }),
        r = (t.bounding_box = function(e, t) {
            return e[0] < t[2] && e[2] > t[0] && e[1] < t[3] && e[3] > t[1]
        }, t.circular_collision = function(e, t, n, o) {
            return (0, a.v2d_magnitude)((0, a.v2d_subtract)(e, n)) <= t + o
        }, t.swap = function(e, t) {
            return r(e, t, e.length)
        }, t.old_school_angle = function(e) {
            return e >= 0 && e < o.PI / 4 - o.EPSILON ? 0 : e >= o.PI / 4 - o.EPSILON && e < o.PI / 2 - o.EPSILON ? o.PI / 4 : e >= o.PI / 2 - o.EPSILON && e < o.PI / 2 + o.EPSILON ? o.PI / 2 : e >= o.PI / 2 + o.EPSILON && e < o.PI - o.EPSILON ? 3 * o.PI / 4 : e >= o.PI - o.EPSILON && e < o.PI + o.EPSILON ? o.PI : e >= o.PI + o.EPSILON && e < 3 * o.PI / 2 - o.EPSILON ? 5 * o.PI / 4 : e >= 3 * o.PI / 2 - o.EPSILON && e < 3 * o.PI / 2 + o.EPSILON ? 3 * o.PI / 2 : e > 3 * o.PI / 2 + o.EPSILON && e <= 7 * o.PI / 4 + o.EPSILON ? 7 * o.PI / 4 : 0
        }, function(e, t, n) {
            var o = e,
                a = t,
                i = void 0,
                r = void 0;
            for (i = 0; i < n; i++) r = o[i], o[i] = a[i], a[i] = r;
            return [o[i], a[i]]
        })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.video_getMousePos = t.video_get_window_size = t.video_changemode = t.video_show_fps = t.video_is_fps_visible = t.video_is_fullscreen = t.video_is_smooth = t.video_get_resolution = t.video_get_backbuffer = t.video_get_canvas = t.video_getCameraY = t.video_getCameraX = t.video_setCameraY = t.video_setFlipX = t.video_setCameraX = t.video_renderLoading = t.video_clearDisplay = t.video_fadefx_is_fading = t.video_fadefx_over = t.video_fadefx_out = t.video_fadefx_in = t.video_render = t.video_getScale = t.video_init = t.VIDEO_SCALE = t.VIDEO_SCREEN_H = t.VIDEO_SCREEN_W = t.VIDEORESOLUTION_EDT = t.VIDEORESOLUTION_MAX = t.VIDEORESOLUTION_2X = t.VIDEORESOLUTION_1X = void 0;
    var o = n(3),
        a = n(9),
        i = n(2),
        r = t.VIDEORESOLUTION_1X = 0,
        _ = t.VIDEORESOLUTION_2X = 1,
        s = t.VIDEORESOLUTION_MAX = 2,
        c = t.VIDEORESOLUTION_EDT = 3,
        d = t.VIDEO_SCREEN_W = 480,
        l = t.VIDEO_SCREEN_H = 271,
        u = void 0,
        p = void 0,
        f = void 0,
        g = void 0,
        v = !1,
        m = !1,
        h = !1,
        b = 0,
        y = 1,
        I = 2,
        E = void 0,
        x = void 0,
        w = void 0,
        S = void 0,
        O = void 0,
        L = 0,
        k = 0,
        R = !1,
        N = (t.VIDEO_SCALE = 1, 1),
        T = 1,
        D = (t.video_init = function(e, t, n, o, a, i) {
            j(t, n, o), A(i), u = document.getElementById("canvas"), u ? (p = u.getContext("2d"), N = u.width / d, T = u.height / l, p.scale(u.width / d, u.height / l)) : (u = document.createElement("canvas"), p = u.getContext("2d"), u.width = d, u.height = l, document.body.appendChild(u)), N = d / window.innerWidth, T = N, p.imageSmoothingEnabled = !1, p.mozImageSmoothingEnabled = !1, f = p, D()
        }, t.video_getScale = function() {
            return (0, i.v2d_new)(N, T)
        }, t.video_render = function() {
            if (x = !1, E != b)
                if ((S += (0, o.timer_get_delta)()) < O) {
                    var e = void 0;
                    e = parseInt(1.25 * S / O * 100, 10), e = (0, a.clip)(e, 0, 100), e = E == y ? 100 - e : e, e /= 100, P().fillStyle = w, P().globalAlpha = e, P().fillRect(0, 0, u.width, u.height)
                } else E == I && (P().fillStyle = w, P().fillRect(0, 0, u.width, u.height)), E = b, O = S = 0, w = 0, x = !0;
            P().globalAlpha = 1, M() && (P().font = "14px Arial", P().fillStyle = "white", P().fillText((0, o.timer_get_fps)(), d - 30, 20))
        }, t.video_fadefx_in = function(e, t) {
            E == b && (E = y, x = !1, w = e, S = 0, O = t)
        }, t.video_fadefx_out = function(e, t) {
            E == b && (E = I, x = !1, w = e, S = 0, O = t)
        }, t.video_fadefx_over = function() {
            return x
        }, t.video_fadefx_is_fading = function() {
            return E != b
        }, t.video_clearDisplay = function(e) {
            p.fillStyle = e ? e : "rgb(0, 0, 0)", p.fillRect(0, 0, u.width, u.height)
        }),
        P = (t.video_renderLoading = function(e, t) {
            D();
            var n = P();
            n.beginPath(), n.rect(130, l / 2 - 20, 210, 20), n.fillStyle = "black", n.fill(), n.lineWidth = 1, n.strokeStyle = "white", n.stroke(), t = t < 1 ? 0 : t > 202 ? 202 : 202 / t, n.beginPath(), n.rect(134, l / 2 - 17, t, 14), n.fillStyle = "white", n.fill(), n.lineWidth = 1, n.strokeStyle = "black", n.stroke(), n.font = "14px Arial", n.fillStyle = "white", n.fillText(e, 130, l / 2 - 30)
        }, t.video_setCameraX = function(e) {
            return L = e
        }, t.video_setFlipX = function(e) {
            return R = e
        }, t.video_setCameraY = function(e) {
            return k = e
        }, t.video_getCameraX = function() {
            return L
        }, t.video_getCameraY = function() {
            return k
        }, t.video_get_canvas = function() {
            return u
        }, t.video_get_backbuffer = function() {
            return f
        }),
        M = (t.video_get_resolution = function() {
            return g
        }, t.video_is_smooth = function() {
            return v
        }, t.video_is_fullscreen = function() {
            return m
        }, t.video_is_fps_visible = function() {
            return h
        }),
        A = t.video_show_fps = function(e) {
            h = e
        },
        j = t.video_changemode = function(e, t, n) {
            g = e, m = n, v = t
        };
    t.video_get_window_size = function() {
        var e = d,
            t = l;
        switch (g) {
            case r:
                e = d, t = l;
                break;
            case _:
                e = 2 * d, t = 2 * l;
                break;
            case s:
                e = d, t = l;
                break;
            case c:
                e = d, t = l
        }
        return (0, i.v2d_new)(e, t)
    }, t.video_getMousePos = function(e, t) {
        var n = e.getBoundingClientRect();
        return {
            x: t.clientX - n.left,
            y: t.clientY - n.top
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.item_render = t.item_update = t.item_destroy = t.item_create = t.IT_WINDSHIELDBOX = t.IT_ACIDSHIELDBOX = t.IT_WATERSHIELDBOX = t.IT_THUNDERSHIELDBOX = t.IT_VFIREDANGER = t.IT_FIREDANGER = t.IT_VDANGER = t.IT_HDNADOORCHARGE = t.IT_HDNADOORNEON = t.IT_HDNADOOR = t.IT_DNADOORCHARGE = t.IT_DNADOORNEON = t.IT_PERRWSPIKES = t.IT_PERLWSPIKES = t.IT_PERCEILSPIKES = t.IT_PERSPIKES = t.IT_RWSPIKES = t.IT_LWSPIKES = t.IT_CEILSPIKES = t.IT_BBLUESPRING = t.IT_BLBLUESPRING = t.IT_BRBLUESPRING = t.IT_TLBLUESPRING = t.IT_TRBLUESPRING = t.IT_LBLUESPRING = t.IT_RBLUESPRING = t.IT_BLUESPRING = t.IT_BYELLOWSPRING = t.IT_BLYELLOWSPRING = t.IT_BRYELLOWSPRING = t.IT_TLYELLOWSPRING = t.IT_TRYELLOWSPRING = t.IT_LYELLOWSPRING = t.IT_RYELLOWSPRING = t.IT_BREDSPRING = t.IT_BLREDSPRING = t.IT_BRREDSPRING = t.IT_TLREDSPRING = t.IT_TRREDSPRING = t.IT_FIRESHIELDBOX = t.IT_FIREBALL = t.IT_DANGPOWER = t.IT_DNADOOR = t.IT_SPIKES = t.IT_DANGER = t.IT_BUMPER = t.IT_LOOPFLOORTOP = t.IT_LOOPFLOORNONE = t.IT_LOOPFLOOR = t.IT_ENDLEVEL = t.IT_ENDSIGN = t.IT_GOAL = t.IT_CHECKPOINT = t.IT_BIGRING = t.IT_TELEPORTER = t.IT_DOOR = t.IT_SWITCH = t.IT_BLUERING = t.IT_LREDSPRING = t.IT_RREDSPRING = t.IT_REDSPRING = t.IT_YELLOWSPRING = t.IT_LOOPNONE = t.IT_LOOPLEFT = t.IT_LOOPMIDDLE = t.IT_LOOPRIGHT = t.IT_ANIMAL = t.IT_PIXEL = t.IT_FLYINGTEXT = t.IT_EXPLOSION = t.IT_FALGLASSES = t.IT_ICON = t.IT_CRUSHEDBOX = t.IT_EMPTYBOX = t.IT_TRAPBOX = t.IT_SHIELDBOX = t.IT_GLASSESBOX = t.IT_SPEEDBOX = t.IT_STARBOX = t.IT_RINGBOX = t.IT_LIFEBOX = t.IT_RING = t.ITEMDATA_MAX = t.IS_DEAD = t.IS_IDLE = void 0;
    var o = n(7),
        a = n(40),
        i = n(41),
        r = n(42),
        _ = n(43),
        s = n(44),
        c = n(45),
        d = n(46),
        l = n(47),
        u = n(48),
        p = n(49),
        f = n(31),
        g = n(50),
        v = n(51),
        m = n(52),
        h = (n(53), n(54)),
        b = n(55),
        y = n(56),
        I = n(57),
        E = n(58),
        x = n(59),
        w = n(60),
        S = n(61),
        O = n(62),
        L = n(32),
        k = t.IS_IDLE = 0,
        R = (t.IS_DEAD = 1, t.ITEMDATA_MAX = 82, t.IT_RING = 0),
        N = t.IT_LIFEBOX = 1,
        T = t.IT_RINGBOX = 2,
        D = t.IT_STARBOX = 3,
        P = t.IT_SPEEDBOX = 4,
        M = t.IT_GLASSESBOX = 5,
        A = t.IT_SHIELDBOX = 6,
        j = t.IT_TRAPBOX = 7,
        B = t.IT_EMPTYBOX = 8,
        C = t.IT_CRUSHEDBOX = 9,
        F = t.IT_ICON = 10,
        H = t.IT_FALGLASSES = 11,
        G = t.IT_EXPLOSION = 12,
        V = t.IT_FLYINGTEXT = 13,
        W = (t.IT_PIXEL = 14, t.IT_ANIMAL = 15),
        U = t.IT_LOOPRIGHT = 16,
        Y = t.IT_LOOPMIDDLE = 17,
        X = t.IT_LOOPLEFT = 18,
        K = t.IT_LOOPNONE = 19,
        z = t.IT_YELLOWSPRING = 20,
        q = t.IT_REDSPRING = 21,
        $ = t.IT_RREDSPRING = 22,
        Q = t.IT_LREDSPRING = 23,
        J = t.IT_BLUERING = 24,
        Z = t.IT_SWITCH = 25,
        ee = t.IT_DOOR = 26,
        te = t.IT_TELEPORTER = 27,
        ne = t.IT_BIGRING = 28,
        oe = t.IT_CHECKPOINT = 29,
        ae = t.IT_GOAL = 30,
        ie = t.IT_ENDSIGN = 31,
        re = t.IT_ENDLEVEL = 32,
        _e = t.IT_LOOPFLOOR = 33,
        se = t.IT_LOOPFLOORNONE = 34,
        ce = t.IT_LOOPFLOORTOP = 35,
        de = t.IT_BUMPER = 36,
        le = t.IT_DANGER = 37,
        ue = t.IT_SPIKES = 38,
        pe = t.IT_DNADOOR = 39,
        fe = t.IT_DANGPOWER = 40,
        ge = t.IT_FIREBALL = 41,
        ve = t.IT_FIRESHIELDBOX = 42,
        me = t.IT_TRREDSPRING = 43,
        he = t.IT_TLREDSPRING = 44,
        be = t.IT_BRREDSPRING = 45,
        ye = t.IT_BLREDSPRING = 46,
        Ie = t.IT_BREDSPRING = 47,
        Ee = t.IT_RYELLOWSPRING = 48,
        xe = t.IT_LYELLOWSPRING = 49,
        we = t.IT_TRYELLOWSPRING = 50,
        Se = t.IT_TLYELLOWSPRING = 51,
        Oe = t.IT_BRYELLOWSPRING = 52,
        Le = t.IT_BLYELLOWSPRING = 53,
        ke = t.IT_BYELLOWSPRING = 54,
        Re = t.IT_BLUESPRING = 55,
        Ne = t.IT_RBLUESPRING = 56,
        Te = t.IT_LBLUESPRING = 57,
        De = t.IT_TRBLUESPRING = 58,
        Pe = t.IT_TLBLUESPRING = 59,
        Me = t.IT_BRBLUESPRING = 60,
        Ae = t.IT_BLBLUESPRING = 61,
        je = t.IT_BBLUESPRING = 62,
        Be = t.IT_CEILSPIKES = 63,
        Ce = t.IT_LWSPIKES = 64,
        Fe = t.IT_RWSPIKES = 65,
        He = t.IT_PERSPIKES = 66,
        Ge = t.IT_PERCEILSPIKES = 67,
        Ve = t.IT_PERLWSPIKES = 68,
        We = t.IT_PERRWSPIKES = 69,
        Ue = t.IT_DNADOORNEON = 70,
        Ye = t.IT_DNADOORCHARGE = 71,
        Xe = t.IT_HDNADOOR = 72,
        Ke = t.IT_HDNADOORNEON = 73,
        ze = t.IT_HDNADOORCHARGE = 74,
        qe = t.IT_VDANGER = 75,
        $e = t.IT_FIREDANGER = 76,
        Qe = t.IT_VFIREDANGER = 77,
        Je = t.IT_THUNDERSHIELDBOX = 78,
        Ze = t.IT_WATERSHIELDBOX = 79,
        et = t.IT_ACIDSHIELDBOX = 80,
        tt = t.IT_WINDSHIELDBOX = 81;
    t.item_create = function(e) {
        var t = null;
        switch (e) {
            case R:
                t = (0, x.ring_create)();
                break;
            case N:
                t = (0, I.lifebox_create)();
                break;
            case T:
                t = (0, I.ringbox_create)();
                break;
            case D:
                t = (0, I.starbox_create)();
                break;
            case P:
                t = (0, I.speedbox_create)();
                break;
            case M:
                t = (0, I.glassesbox_create)();
                break;
            case A:
                t = (0, I.shieldbox_create)();
                break;
            case ve:
                t = (0, I.fireshieldbox_create)();
                break;
            case Je:
                t = (0, I.thundershieldbox_create)();
                break;
            case Ze:
                t = (0, I.watershieldbox_create)();
                break;
            case et:
                t = (0, I.acidshieldbox_create)();
                break;
            case tt:
                t = (0, I.windshieldbox_create)();
                break;
            case j:
                t = (0, I.trapbox_create)();
                break;
            case B:
                t = (0, I.emptybox_create)();
                break;
            case C:
                t = (0, d.crushedbox_create)();
                break;
            case F:
                t = (0, y.icon_create)();
                break;
            case H:
                t = (0, m.falglasses_create)();
                break;
            case G:
                t = (0, v.explosion_create)();
                break;
            case V:
                t = (0, h.flyingtext_create)();
                break;
            case W:
                t = (0, a.animal_create)();
                break;
            case U:
                t = (0, E.loopright_create)();
                break;
            case Y:
                t = (0, E.looptop_create)();
                break;
            case X:
                t = (0, E.loopleft_create)();
                break;
            case K:
                t = (0, E.loopnone_create)();
                break;
            case _e:
                t = (0, E.loopfloor_create)();
                break;
            case se:
                t = (0, E.loopfloornone_create)();
                break;
            case ce:
                t = (0, E.loopfloortop_create)();
                break;
            case z:
                t = (0, S.yellowspring_create)();
                break;
            case ke:
                t = (0, S.byellowspring_create)();
                break;
            case we:
                t = (0, S.tryellowspring_create)();
                break;
            case Ee:
                t = (0, S.ryellowspring_create)();
                break;
            case Oe:
                t = (0, S.bryellowspring_create)();
                break;
            case Le:
                t = (0, S.blyellowspring_create)();
                break;
            case xe:
                t = (0, S.lyellowspring_create)();
                break;
            case Se:
                t = (0, S.tlyellowspring_create)();
                break;
            case q:
                t = (0, S.redspring_create)();
                break;
            case Ie:
                t = (0, S.bredspring_create)();
                break;
            case me:
                t = (0, S.trredspring_create)();
                break;
            case $:
                t = (0, S.rredspring_create)();
                break;
            case be:
                t = (0, S.brredspring_create)();
                break;
            case ye:
                t = (0, S.blredspring_create)();
                break;
            case Q:
                t = (0, S.lredspring_create)();
                break;
            case he:
                t = (0, S.tlredspring_create)();
                break;
            case Re:
                t = (0, S.bluespring_create)();
                break;
            case je:
                t = (0, S.bbluespring_create)();
                break;
            case De:
                t = (0, S.trbluespring_create)();
                break;
            case Ne:
                t = (0, S.rbluespring_create)();
                break;
            case Me:
                t = (0, S.brbluespring_create)();
                break;
            case Ae:
                t = (0, S.blbluespring_create)();
                break;
            case Te:
                t = (0, S.lbluespring_create)();
                break;
            case Pe:
                t = (0, S.tlbluespring_create)();
                break;
            case J:
                t = (0, _.bluering_create)();
                break;
            case Z:
                t = (0, O.switch_create)();
                break;
            case ee:
                o.PLAYERS.length > 1 && (t = (0, f.door_create)());
                break;
            case te:
                t = (0, L.teleporter_create)();
                break;
            case ne:
                t = (0, r.bigring_create)();
                break;
            case oe:
                t = (0, c.checkpointorb_create)();
                break;
            case ae:
                t = (0, b.goalsign_create)();
                break;
            case ie:
                t = (0, g.endsign_create)();
                break;
            case re:
                t = (0, i.animalprison_create)();
                break;
            case de:
                t = (0, s.bumper_create)();
                break;
            case le:
                t = (0, l.horizontaldanger_create)();
                break;
            case qe:
                t = (0, l.verticaldanger_create)();
                break;
            case $e:
                t = (0, l.horizontalfiredanger_create)();
                break;
            case Qe:
                t = (0, l.verticalfiredanger_create)();
                break;
            case ue:
                t = (0, w.floorspikes_create)();
                break;
            case Be:
                t = (0, w.ceilingspikes_create)();
                break;
            case Ce:
                t = (0, w.leftwallspikes_create)();
                break;
            case Fe:
                t = (0, w.rightwallspikes_create)();
                break;
            case He:
                t = (0, w.periodic_floorspikes_create)();
                break;
            case Ge:
                t = (0, w.periodic_ceilingspikes_create)();
                break;
            case Ve:
                t = (0, w.periodic_leftwallspikes_create)();
                break;
            case We:
                t = (0, w.periodic_rightwallspikes_create)();
                break;
            case pe:
                t = (0, p.surge_dnadoor_create)();
                break;
            case Ue:
                t = (0, p.neon_dnadoor_create)();
                break;
            case Ye:
                t = (0, p.charge_dnadoor_create)();
                break;
            case Xe:
                t = (0, p.surge_horizontal_dnadoor_create)();
                break;
            case Ke:
                t = (0, p.neon_horizontal_dnadoor_create)();
                break;
            case ze:
                t = (0, p.charge_horizontal_dnadoor_create)();
                break;
            case fe:
                t = (0, u.dangerouspower_create)();
                break;
            case ge:
                t = (0, u.dangerouspower_create)()
        }
        return null != t && (t.type = e, t.state = k, t.init(t)), t
    }, t.item_destroy = function(e) {
        return null
    }, t.item_update = function(e, t, n, o, a, i) {
        e.update(e, t, n, o, a, i)
    }, t.item_render = function(e, t) {
        e.render(e, t)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.image_destroy = t.image_pixelperfect_collision = t.image_clear = t.image_rgb = t.image_putpixel = t.image_blit = t.image_draw = t.image_rectfill = t.image_load = t.image_create = void 0;
    var o = (n(8), n(10)),
        a = {};
    t.image_create = function(e, t) {
        return (0, o.video_get_backbuffer)().createImageData(e, t)
    }, t.image_load = function(e) {
        return new Promise(function(t, n) {
            if (a[e]) return t(a[e]);
            var o = document.createElement("img");
            o.src = e, o.addEventListener("load", function() {
                return a[e] = o, t(o)
            })
        })
    }, t.image_rectfill = function(e, t, n, o, a, i) {
        e.fillStyle = i, e.fillRect(t, n, o - t, a - n)
    }, t.image_draw = function(e, t, n, o, a) {
        t.putImageData(e, n, o)
    }, t.image_blit = function(e, t, n, o, a, i, r, _) {
        if (!e || !t) return !1;
        t.drawImage(e, n, o, r, _, a, i, r, _)
    }, t.image_putpixel = function(e, t, n, o, a) {
        t.fillStyle = a, t.fillRect(n, o, n + 1, o + 1)
    }, t.image_rgb = function(e, t, n) {
        return "rgb(" + e + "," + t + "," + n + ")"
    }, t.image_clear = function(e, t, n, o) {
        for (var a = 0; a < e.data.length; a += 4) e.data[a] = t, e.data[a + 1] = n, e.data[a + 2] = o
    }, t.image_pixelperfect_collision = function(e, t, n, o, a, i) {
        return !0
    }, t.image_destroy = function(e) {
        e && (e.data, e = null)
    }
}, function(e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.input_get_xy = t.input_clear = t.input_is_ignored = t.input_restore = t.input_ignore = t.input_simulate_button_down = t.input_button_howlong = t.input_button_up = t.input_button_pressed = t.input_button_down = t.input_destroy = t.input_create_user = t.input_create_joystick = t.input_create_mouse = t.input_create_keyboard = t.input_create_computer = t.input_is_joystick_ignored = t.input_ignore_joystick = t.input_joystick_available = t.input_release = t.input_render = t.input_update = t.input_init = t.IB_FIRE5 = t.IB_FIRE4 = t.IB_FIRE3 = t.IB_FIRE2 = t.IB_FIRE1 = t.IB_LEFT = t.IB_RIGHT = t.IB_DOWN = t.IB_UP = t.KEY_TILDA = t.KEY_ESC = t.KEY_ENTER = t.KEY_LCONTROL = t.KEY_SPACE = t.KEY_LEFT = t.KEY_RIGHT = t.KEY_DOWN = t.KEY_UP = void 0;
    var a = n(8),
        i = n(36),
        r = n(3),
        _ = n(2),
        s = n(10),
        c = n(38),
        d = o(c),
        l = 0,
        u = 1,
        p = 2,
        f = 3,
        g = 4,
        v = 9,
        m = t.KEY_UP = 38,
        h = t.KEY_DOWN = 40,
        b = t.KEY_RIGHT = 39,
        y = t.KEY_LEFT = 37,
        I = t.KEY_SPACE = 32,
        E = t.KEY_LCONTROL = 17,
        x = t.KEY_ENTER = 13,
        w = t.KEY_ESC = 27,
        S = t.KEY_TILDA = 192,
        O = t.IB_UP = 1,
        L = t.IB_DOWN = 2,
        k = t.IB_RIGHT = 3,
        R = t.IB_LEFT = 4,
        N = t.IB_FIRE1 = 5,
        T = t.IB_FIRE2 = 6,
        D = t.IB_FIRE3 = 7,
        P = t.IB_FIRE4 = 8,
        M = t.IB_FIRE5 = 9,
        A = null,
        j = void 0,
        B = void 0,
        C = !1,
        F = {
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            17: "lcontrol",
            32: "space",
            13: "enter",
            27: "esc",
            192: "tilda"
        },
        H = void 0,
        G = void 0,
        V = void 0,
        W = void 0,
        U = void 0,
        Y = void 0,
        X = void 0,
        K = {
            x: 0,
            y: 0
        },
        z = {
            left: !1,
            middle: !1,
            right: !1
        },
        q = (t.input_init = function() {
            (0, a.logfile_message)("input_init()"), A = null, (0, s.video_get_canvas)().addEventListener("contextmenu", function(e) {
                if (2 === e.button) return e.preventDefault(), !1
            }, !1), (0, s.video_get_canvas)().addEventListener("mousemove", function(e) {
                K = (0, s.video_getMousePos)((0, s.video_get_canvas)(), e)
            }, !1), (0, s.video_get_canvas)().addEventListener("mousedown", function(e) {
                switch (e.which) {
                    case 1:
                        z.left = !0;
                        break;
                    case 2:
                        z.middle = !0;
                        break;
                    case 3:
                        z.right = !0
                }
            }, !1), (0, s.video_get_canvas)().addEventListener("mouseup", function(e) {
                switch (e.which) {
                    case 1:
                        z.left = !1;
                        break;
                    case 2:
                        z.middle = !1;
                        break;
                    case 3:
                        z.right = !1
                }
            }, !1), j = !1, B = !1, Y = (0, i.osspec_canGamepad)(), C = (0, i.osspec_isTouch)(), C && (G = new d.default({
                container: (0, s.video_get_canvas)(),
                strokeStyle: "#eee",
                mouseSupport: !0,
                stationaryBase: !0,
                baseX: 70,
                baseY: 200,
                limitStickTravel: !0,
                stickRadius: 50
            }), G.addEventListener("touchStartValidation", function(e) {
                var t = e.changedTouches[0];
                return !(t.pageX >= window.innerWidth / 2) && !(t.pageY < window.innerHeight / 2)
            }), V = new d.default({
                container: (0, s.video_get_canvas)(),
                strokeStyle: "#eee",
                mouseSupport: !0,
                stationaryBase: !0,
                baseX: 420,
                baseY: 200,
                limitStickTravel: !0,
                stickRadius: 50
            }), V.addEventListener("touchStartValidation", function(e) {
                var t = e.changedTouches[0];
                return !(t.pageX < window.innerWidth / 2) && !(t.pageY < window.innerHeight / 2)
            }), W = new d.default({
                container: (0, s.video_get_canvas)(),
                strokeStyle: "#eee",
                mouseSupport: !0,
                stationaryBase: !0,
                baseX: 70,
                baseY: 50,
                limitStickTravel: !0,
                stickRadius: 50
            }), W.addEventListener("touchStartValidation", function(e) {
                var t = e.changedTouches[0];
                return !(t.pageX > window.innerWidth / 2) && !(t.pageY > window.innerHeight / 2)
            }), U = new d.default({
                container: (0, s.video_get_canvas)(),
                strokeStyle: "#eee",
                mouseSupport: !0,
                stationaryBase: !0,
                baseX: 420,
                baseY: 50,
                limitStickTravel: !0,
                stickRadius: 50
            }), U.addEventListener("touchStartValidation", function(e) {
                var t = e.changedTouches[0];
                return !(t.pageX < window.innerWidth / 2) && !(t.pageY > window.innerHeight / 2)
            })), H = Z(F)
        }, t.input_update = function() {
            var e = void 0,
                t = (0, r.timer_get_delta)(),
                n = void 0;
            for (n = A; n; n = n.next) {
                for (e = 0; e < v; e++) n.data.oldstate[e] = n.data.state[e];
                for (e = 0; e < v; e++) $(n.data, e) ? n.data.howlong[e] += t : n.data.howlong[e] = 0;
                switch (n.data.type) {
                    case u:
                        n.data.state[O] = H.up, n.data.state[L] = H.down, n.data.state[R] = H.left, n.data.state[k] = H.right, n.data.state[N] = H.space, n.data.state[T] = H.lcontrol, n.data.state[D] = H.enter, n.data.state[P] = H.esc, n.data.state[M] = H.tilda;
                        break;
                    case g:
                        n.data.x = K.x, n.data.y = K.y, n.data.state[N] = z.left, n.data.state[D] = z.middle, n.data.state[T] = z.right;
                        break;
                    case p:
                        for (e = 0; e < v; e++) n.data.state[e] = !1;
                        break;
                    case f:
                        q() && (n.data.state[O] = joy[0].stick[0].axis[1].d1, n.data.state[L] = joy[0].stick[0].axis[1].d2, n.data.state[R] = joy[0].stick[0].axis[0].d1, n.data.state[k] = joy[0].stick[0].axis[0].d2, n.data.state[N] = joy[0].button[0].b, n.data.state[T] = joy[0].button[1].b, n.data.state[D] = joy[0].button[2].b, n.data.state[P] = joy[0].button[3].b);
                        break;
                    case l:
                        n.data.state[O] = H.up, n.data.state[L] = H.down, n.data.state[R] = H.left, n.data.state[k] = H.right, n.data.state[N] = H.space, n.data.state[T] = H.lcontrol, n.data.state[D] = H.enter, n.data.state[P] = H.esc, C && (n.data.state[O] = G.up(), n.data.state[L] = G.down(), n.data.state[R] = G.left(), n.data.state[k] = G.right(), n.data.state[N] = V._pressed, n.data.state[P] = W._pressed, n.data.state[T] = U._pressed), Y && (X = ee()), X && (n.data.state[O] = X.buttons[12].pressed, n.data.state[L] = X.buttons[13].pressed, n.data.state[R] = X.buttons[14].pressed, n.data.state[k] = X.buttons[15].pressed, n.data.state[N] = X.buttons[0].pressed, n.data.state[T] = X.buttons[1].pressed, n.data.state[D] = X.buttons[2].pressed, n.data.state[P] = X.buttons[3].pressed)
                }
            }
        }, t.input_render = function() {
            G && G.render((0, s.video_get_backbuffer)()), V && V.render((0, s.video_get_backbuffer)()), W && W.render((0, s.video_get_backbuffer)()), U && U.render((0, s.video_get_backbuffer)())
        }, t.input_release = function() {}, t.input_joystick_available = function() {
            return j && !B
        }),
        $ = (t.input_ignore_joystick = function(e) {
            B = e
        }, t.input_is_joystick_ignored = function() {
            return B
        }, t.input_create_computer = function() {
            var e = {},
                t = void 0;
            for (e.type = p, e.enabled = !0, e.dx = e.dy = e.x = e.y = 0, e.state = [], e.oldstate = [], e.howlong = [], t = 0; t < v; t++) e.state[t] = e.oldstate[t] = !1, e.howlong[t] = 0;
            return Q(e), e
        }, t.input_create_keyboard = function(e) {
            var t = {},
                n = void 0;
            for (t.type = u, t.enabled = !0, t.dx = t.dy = t.x = t.y = 0, t.state = [], t.oldstate = [], t.howlong = [], n = 0; n < v; n++) t.state[n] = t.oldstate[n] = !1, t.howlong[n] = 0;
            if (e)
                for (t.keybmap = [], n = 0; n < v; n++) t.keybmap[n] = e[n];
            else t.keybmap[O] = m, t.keybmap[L] = h, t.keybmap[k] = b, t.keybmap[R] = y, t.keybmap[N] = I, t.keybmap[T] = E, t.keybmap[D] = x, t.keybmap[P] = w, t.keybmap[M] = S;
            return Q(t), t
        }, t.input_create_mouse = function() {
            var e = {},
                t = void 0;
            for (e.type = g, e.enabled = !0, e.dx = e.dy = e.x = e.y = 0, e.state = [], e.oldstate = [], e.howlong = [], t = 0; t < v; t++) e.state[t] = e.oldstate[t] = !1, e.howlong[t] = 0;
            return Q(e), e
        }, t.input_create_joystick = function() {
            if (!q()) return (0, a.logfile_message)("WARNING: called input_create_joystick(), but no joystick is available!"), null;
            var e = void 0,
                t = {};
            for (t.type = f, t.enabled = !0, t.dx = t.dy = t.x = t.y = 0, t.state = [], t.oldstate = [], t.howlong = [], e = 0; e < v; e++) t.state[e] = t.oldstate[e] = !1, t.howlong[e] = 0;
            return Q(t), t
        }, t.input_create_user = function() {
            var e = {};
            e.type = l, e.enabled = !0, e.dx = e.dy = e.x = e.y = 0, e.state = [], e.oldstate = [], e.howlong = [];
            for (var t = 0; t < v; t++) e.state[t] = e.oldstate[t] = !1, e.howlong[t] = 0;
            return e.keybmap = [], e.keybmap[O] = m, e.keybmap[L] = h, e.keybmap[k] = b, e.keybmap[R] = y, e.keybmap[N] = I, e.keybmap[T] = E, e.keybmap[D] = x, e.keybmap[P] = w, Q(e), e
        }, t.input_destroy = function(e) {
            J(e), e = null
        }, t.input_button_down = function(e, t) {
            return !!t && (!!e.enabled && e.state[parseInt(t, 10)])
        }),
        Q = (t.input_button_pressed = function(e, t) {
            return !!t && (!!e.enabled && (e.state[parseInt(t, 10)] && !e.oldstate[parseInt(t, 10)]))
        }, t.input_button_up = function(e, t) {
            return !t || !!e.enabled && (!e.state[parseInt(t, 10)] && e.oldstate[parseInt(t, 10)])
        }, t.input_button_howlong = function(e, t) {
            return e.enabled ? e.howlong[parseInt(t, 10)] : 0
        }, t.input_simulate_button_down = function(e, t) {
            e.state[parseInt(t, 10)] = !0
        }, t.input_ignore = function(e) {
            e.enabled = !1
        }, t.input_restore = function(e) {
            e.enabled = !0
        }, t.input_is_ignored = function(e) {
            return !e.enabled
        }, t.input_clear = function(e) {
            for (var t = 0; t < v; t++) e.state[t] = e.oldstate[t] = !1
        }, t.input_get_xy = function(e) {
            return (0, _.v2d_new)(e.x, e.y)
        }, function(e) {
            var t = {};
            t.data = e, t.next = A, A = t
        }),
        J = function(e) {
            var t = void 0,
                n = void 0;
            if (A.data == e) n = A.next, A = null, A = n;
            else {
                for (t = A; t.next && t.next.data != e;) t = t.next;
                t.next && (n = t.next.next, t.next = null, t.next = n)
            }
        },
        Z = function(e) {
            function t(t) {
                if (e.hasOwnProperty(t.keyCode)) {
                    var o = "keydown" == t.type;
                    n[e[t.keyCode]] = o, t.preventDefault()
                }
            }
            var n = Object.create(null);
            return addEventListener("keydown", t), addEventListener("keyup", t), n
        },
        ee = function() {
            return "undefined" != typeof navigator && (navigator.getGamepads()[0] || null)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = 16,
        a = [],
        i = 0,
        r = (t.scenestack_init = function() {
            i = 0;
            for (var e = 0; e < o; e++) a[e] = null
        }, t.scenestack_release = function() {
            for (; !_();) r()
        }, t.scenestack_push = function(e) {
            a[i++] = e, e && e.init()
        }, t.scenestack_pop = function() {
            a[i - 1].release(), a[i - 1] = null, i--
        }),
        _ = (t.scenestack_top = function() {
            return a[i - 1]
        }, t.scenestack_empty = function() {
            return 0 === i
        })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.font_render = t.font_set_width = t.font_get_charspacing = t.font_get_charsize = t.font_get_text = t.font_set_text = t.font_destroy = t.font_create = t.font_init = void 0;
    var o = n(8),
        a = n(9),
        i = n(2),
        r = n(18),
        _ = n(0),
        s = n(10),
        c = 5,
        d = 10,
        l = [],
        u = (t.font_init = function() {
            var e = void 0,
                t = void 0,
                n = void 0,
                a = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*.:!?", "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*.:!?", "0123456789:", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_´abcdefghijklmnopqrstuvwxyz{|}~", " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_´abcdefghijklmnopqrstuvwxyz{|}~"];
            for ((0, o.logfile_message)("font_init()"), e = 0; e < a.length; e++)
                for (l[e] = {
                        ch: []
                    }, n = "FT_FONT" + e, t = 0; t < a[e].length; t++) l[e].ch[a[e][t]] = (0, _.sprite_get_image)((0, _.sprite_get_animation)(n, 0), t);
            (0, o.logfile_message)("font_init() ok")
        }, t.font_create = function(e) {
            var t = void 0,
                n = {};
            for (n.type = (0, a.clip)(e, 0, d - 1), n.text = null, n.width = 0, n.visible = !0, n.hspace = n.vspace = 1, n.value = [], n.position = (0, i.v2d_new)(0, 0), t = 0; t < c; t++) n.value[t] = 0;
            return n
        }, t.font_destroy = function(e) {}, t.font_set_text = function(e, t) {
            for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) o[a - 2] = arguments[a];
            if (!e) return !1;
            var i = void 0;
            for (i = 0; i < o.length; i++) o[i] = "" + o[i];
            t = "" + t;
            var _ = t.match(/\$[A-Z_\d]\w+/g);
            if (_)
                for (i = 0; i < _.length; i++) {
                    var s = _[i].slice(1),
                        c = (0, r.lang_get)(s);
                    c && (t = t.replace("$" + s, c))
                }
            if (_ = t.match(/\%[s]+/g))
                for (i = 0; i < _.length; i++)
                    if (o[i]) {
                        var d = o[i].match(/\$[A-Z_\d]\w+/g);
                        d && (o[i] = d[0].slice(1)), t = t.replace("%s", (0, r.lang_get)(o[i]))
                    } if (_ = t.match(/\%[d]+/g))
                for (i = 0; i < _.length; i++) o[i] && (t = t.replace("%d", "" + o[i]));
            return e.text = "" + t, e
        }, t.font_get_text = function(e) {
            return e.text ? e.text : ""
        }, t.font_get_charsize = function(e) {
            return u(e)
        }, t.font_get_charspacing = function(e) {
            return (0, i.v2d_new)(e.hspace, e.vspace)
        }, t.font_set_width = function(e, t) {
            e.width = Math.max(0, t)
        }, t.font_render = function(e, t) {
            var n = 0,
                o = 0,
                i = void 0,
                r = void 0,
                _ = void 0,
                c = void 0,
                d = [],
                g = 0,
                v = 0,
                m = void 0;
            d[v++] = {
                r: !1,
                g: 0,
                b: 0
            };
            var h = u(e);
            if (i = h.x, r = h.y, e && e.visible && e.text)
                for (g = 0; g < e.text.length; g++) {
                    if (_ = e.text[g], m = !1, (0, a.isspace)(e.text[g - 1])) {
                        var b = void 0,
                            y = !1,
                            I = 0,
                            E = e.text.slice(g);
                        E = E.replace("(", ""), E = E.replace(")", "");
                        var x = E.split(" ")[0];
                        for (b = 0; b < x.length; b++) "<" == x[b] && (y = !0), y || I++, ">" == x[b] && (y = !1);
                        m = e.width > 0 && n + (i + e.hspace) * I - e.hspace > e.width
                    }
                    if ("<" == _) {
                        var w = e.text.slice(g, g + 7);
                        if ("<color=" == w) {
                            var S = void 0,
                                O = void 0,
                                L = void 0;
                            g += 7;
                            var k = e.text.slice(g, g + 6);
                            S = f(k.slice(0, 2)), O = f(k.slice(2, 4)), L = f(k.slice(4, 6)), d[v++] = {
                                r: S,
                                g: O,
                                b: L
                            }, g += 7, _ = e.text[g]
                        }
                        "</color" == w && (g += 8, _ = e.text[g], v >= 2 && v--)
                    }
                    m && (n = 0, o += r + e.vspace), "\n" != _ ? (c = l[e.type].ch[_], c ? (n += c.width, (0, a.isspace)(e.text[g - 1]), p((0, s.video_get_backbuffer)(), c, parseInt(e.position.x + n - (t.x - s.VIDEO_SCREEN_W / 2), 10), parseInt(e.position.y + o - (t.y - s.VIDEO_SCREEN_H / 2), 10), d[v - 1].r, d[v - 1].g, d[v - 1].b)) : n += i + e.hspace) : (n = 0, o += r + e.vspace)
                }
        }, function(e) {
            var t, n;
            if (e)
                for (t = 0; t < 256; t++)
                    if (l[e.type] && null != (n = l[e.type].ch[t])) return (0, i.v2d_new)(n.width, n.height);
            return (0, i.v2d_new)(16, 16)
        }),
        p = function(e, t, n, o, a, i, r) {
            var _ = t.data;
            e.drawImage(_, t.sx, t.sy, t.swidth, t.sheight, n, o - 2, t.width * s.VIDEO_SCALE, t.height * s.VIDEO_SCALE)
        },
        f = function(e) {
            return e = e.toLowerCase(), e >= "0" && e <= "9" ? e - "0" : e >= "a" && e <= "f" ? e - "a" + 10 : 255
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.player_set_score = t.player_set_lives = t.player_set_rings = t.player_get_sprite_name = t.player_get_score = t.player_get_lives = t.player_get_rings = t.player_attacking = t.player_bounce = t.player_kill = t.player_hit = t.player_platform_movement = t.player_render = t.player_update = t.player_destroy = t.player_create = t.SH_WINDSHIELD = t.SH_ACIDSHIELD = t.SH_WATERSHIELD = t.SH_THUNDERSHIELD = t.SH_FIRESHIELD = t.SH_SHIELD = t.SH_NONE = t.PL_KNUCKLES = t.PL_TAILS = t.PL_SONIC = t.PLAYER_JUMP_SENSITIVITY = t.TAILS_MAX_FLIGHT = t.PLAYER_MAX_SPEEDSHOES = t.PLAYER_MAX_INVINCIBILITY = t.PLAYER_MAX_BLINK = t.PLAYER_WALL_LEFT = t.PLAYER_WALL_BOTTOM = t.PLAYER_WALL_RIGHT = t.PLAYER_WALL_TOP = t.PLAYER_WALL_NONE = t.PLAYER_MAX_INVSTAR = t.PLAYER_INITIAL_LIVES = void 0;
    var o = n(1),
        a = n(23),
        i = n(11),
        r = n(5),
        _ = n(6),
        s = n(13),
        c = n(0),
        d = n(12),
        l = n(8),
        u = n(3),
        p = n(2),
        f = n(4),
        g = n(9),
        v = n(7),
        m = 0,
        h = 0,
        b = 1,
        y = 2,
        I = (t.PLAYER_INITIAL_LIVES = 5, t.PLAYER_MAX_INVSTAR = 5),
        E = t.PLAYER_WALL_NONE = 0,
        x = t.PLAYER_WALL_TOP = 1,
        w = t.PLAYER_WALL_RIGHT = 2,
        S = t.PLAYER_WALL_BOTTOM = 4,
        O = t.PLAYER_WALL_LEFT = 8,
        L = t.PLAYER_MAX_BLINK = 4,
        k = (t.PLAYER_MAX_INVINCIBILITY = 23, t.PLAYER_MAX_SPEEDSHOES = 23),
        R = t.TAILS_MAX_FLIGHT = 10,
        N = t.PLAYER_JUMP_SENSITIVITY = .88,
        T = t.PL_SONIC = 0,
        D = t.PL_TAILS = 1,
        P = t.PL_KNUCKLES = 2,
        M = t.SH_NONE = 0,
        A = t.SH_SHIELD = 1,
        j = t.SH_FIRESHIELD = 2,
        B = t.SH_THUNDERSHIELD = 3,
        C = t.SH_WATERSHIELD = 4,
        F = t.SH_ACIDSHIELD = 5,
        H = t.SH_WINDSHIELD = 6,
        G = void 0,
        V = void 0,
        W = 0,
        U = 0,
        Y = (t.player_create = function(e) {
            var t = void 0,
                n = {};
            switch ((0, l.logfile_message)("player_create(%d)", e), e) {
                case T:
                    n.name = "Surge";
                    break;
                case D:
                    n.name = "Neon";
                    break;
                case P:
                    n.name = "Charge";
                    break;
                default:
                    n.name = "Unknown"
            }
            for (n.type = e, n.actor = (0, o.actor_create)(), n.disable_movement = !1, n.in_locked_area = !1, n.at_some_border = !1, n.attacking = z, n.bounce = K, n.spin = n.spin_dash = n.braking = n.flying = n.climbing = n.landing = n.spring = !1, n.is_fire_jumping = !1, n.getting_hit = n.dying = n.dead = n.blinking = !1, n.on_moveable_platform = !1, n.lock_accel = h, n.flight_timer = n.blink_timer = n.death_timer = 0, n.disable_jump_for = 0, n.glasses = (0, o.actor_create)(), n.got_glasses = !0, n.shield = (0, o.actor_create)(), n.shield_type = M, n.invincible = !1, n.invtimer = 0, n.invstar = [], t = 0; t < I; t++) n.invstar[t] = (0, o.actor_create)(), n.invstar[t] = (0, o.actor_change_animation)(n.invstar[t], (0, c.sprite_get_animation)("SD_INVSTAR", 0));
            switch (n.got_speedshoes = !1, n.speedshoes_timer = 0, n.disable_wall = E, n.entering_loop = !1, n.at_loopfloortop = !1, n.bring_to_back = !1, n.type) {
                case T:
                    n.actor.acceleration = 250, n.actor.maxspeed = 700, n.actor.jump_strength = 450, n.actor.input = (0, s.input_create_user)(), n.actor = (0, o.actor_change_animation)(n.actor, (0, c.sprite_get_animation)(Z(T), 0));
                    break;
                case D:
                    n.actor.acceleration = 200, n.actor.maxspeed = 600, n.actor.jump_strength = 360, n.actor.input = (0, s.input_create_user)(), n.actor = (0, o.actor_change_animation)(n.actor, (0, c.sprite_get_animation)(Z(D), 0));
                    break;
                case P:
                    n.actor.acceleration = 200, n.actor.maxspeed = 600, n.actor.jump_strength = 360, n.actor.input = (0, s.input_create_user)(), n.actor = (0, o.actor_change_animation)(n.actor, (0, c.sprite_get_animation)(Z(P), 0))
            }
            return V = 1, G = 0, (0, l.logfile_message)("player_create() ok"), n
        }, t.player_destroy = function() {}, t.player_update = function(e, t, n) {
            var a = e.actor;
            return e.blinking && (e.blink_timer += (0, u.timer_get_delta)(), a.visible = (0, u.timer_get_ticks)() % 250 < 125, e.blink_timer >= L && (e.getting_hit = e.blinking = !1, a.visible = !0)), e.disable_movement ? e.spin ? e.actor = (0, o.actor_change_animation)(e.actor, (0, c.sprite_get_animation)(Z(e.type), 3)) : e.spring && (e.actor = (0, o.actor_change_animation)(e.actor, (0, c.sprite_get_animation)(Z(e.type), 13))) : (0, o.actor_move)(a, Y(e, t, n, (0, v.level_gravity)())), e
        }, t.player_render = function(e, t) {
            if (e) {
                var n = e.actor;
                if (n) {
                    var a = n.hot_spot,
                        i = n.position,
                        r = (0, p.v2d_new)(0, 0),
                        _ = (0, p.v2d_new)(0, 0),
                        s = void 0,
                        d = [],
                        l = void 0,
                        v = n.angle,
                        m = 0;
                    if (e.invincible) {
                        var h = (0, c.sprite_get_animation)("SD_INVSTAR", 0).frame_count;
                        for (e.invtimer += (0, u.timer_get_delta)(), s = 0; s < I; s++) d[s] = 720 * (0, u.timer_get_ticks)() * .001 + (s + 1) * (360 / I), _.x = 30 * Math.cos(d[s] * f.PI / 180), _.y = ((0, u.timer_get_ticks)() + 400 * s) % 2e3 / 40, _ = (0, p.v2d_rotate)(_, v), e.invstar[s].position.x = n.position.x + _.x, e.invstar[s].position.y = n.position.y - _.y + 5, (0, o.actor_change_animation_frame)(e.invstar[s], (0, g.random)(h))
                    }
                    switch (e.got_glasses && ee(e), e.shield_type != M && ne(e), e.type) {
                        case T:
                            break;
                        case D:
                            break;
                        case P:
                    }
                    for (s = 0; s < I && e.invincible; s++) d[s] % 360 >= 180 && (0, o.actor_render)(e.invstar[s], t);
                    for (l = n.angle, n.angle = n.is_jumping || e.spin ? l : (0, g.old_school_angle)(l), (0, o.actor_render)(n, t), n.angle = l, e.got_glasses && (0, o.actor_render)(e.glasses, t), e.shield_type != M && (0, o.actor_render)(e.shield, t), s = 0; s < I && e.invincible; s++) d[s] % 360 < 180 && (0, o.actor_render)(e.invstar[s], t);
                    switch (e.type) {
                        case T:
                            break;
                        case D:
                            n.is_jumping && n.animation == (0, c.sprite_get_animation)(Z(D), 3) && (n.position = (0, p.v2d_new)(i.x, i.y), n.angle = v, n.hot_spot = a, e.shield_type != M && (e.shield.angle = m, e.shield.hot_spot = r));
                            break;
                        case P:
                    }
                }
            }
        }, t.player_platform_movement = function(e, t, n, i) {
            var l = e.actor,
                I = Z(e.type),
                E = (0, u.timer_get_delta)(),
                L = 480,
                M = 0,
                A = 1,
                j = l.maxspeed,
                B = (0, p.v2d_new)(0, 0),
                C = void 0,
                F = void 0,
                H = !1,
                G = e.actor.animation == (0, c.sprite_get_animation)(I, 1),
                V = !1,
                W = !1,
                U = !1,
                Y = !1,
                X = null,
                K = (0, o.actor_image)(l).width,
                z = (0, o.actor_image)(l).height,
                q = !(Math.abs(l.angle) < f.EPSILON || Math.abs(l.angle - f.PI / 2) < f.EPSILON || Math.abs(l.angle - f.PI) < f.EPSILON || Math.abs(l.angle - 3 * f.PI / 2) < f.EPSILON),
                $ = -2,
                Q = 2,
                J = 0,
                ee = 0,
                te = 0,
                ne = void 0,
                ae = void 0,
                ie = void 0,
                re = void 0,
                _e = void 0,
                se = void 0,
                ce = void 0,
                de = void 0,
                le = void 0,
                ue = void 0,
                pe = void 0,
                fe = void 0,
                ge = void 0,
                ve = void 0,
                me = void 0,
                he = void 0,
                be = void 0,
                ye = l.position;
            switch (e.type) {
                case T:
                    q ? (J = 1, ee = .8, te = .5) : (J = .7, ee = .5, te = .4);
                    break;
                case D:
                    q ? (J = 1, ee = .7, te = .25) : (J = .7, ee = .5, te = .25);
                    break;
                case P:
                    q ? (J = 1, ee = .7, te = .25) : (J = .7, ee = .5, te = .25)
            }
            if (ue = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(0, -z * J + $), -l.angle)), ve = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(0, -$), -l.angle)), he = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(-K * te + $, -z * ee), -l.angle)), fe = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(K * te - $, -z * ee), -l.angle)), be = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(-K * te + $, -z * J + $), -l.angle)), pe = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(K * te - $, -z * J + $), -l.angle)), me = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(-K * te + $, -$), -l.angle)), ge = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(K * te - $, -$), -l.angle)), e.type == D && l.carrying && Math.abs(l.angle) < f.EPSILON) {
                var Ie = (0, o.actor_image)(l.carrying).height,
                    Ee = l.speed.y > 5 ? .7 * Ie : 0;
                me.y += Ee, ge.y += Ee, ve.y += Ee, he.y += Ie * ee + (0, g.random)(Ie) - .5 * Ie, fe.y = he.y
            }(0, o.actor_corners_disable_detection)(e.disable_wall & O, e.disable_wall & w, e.disable_wall & S, e.disable_wall & x), (0, o.actor_corners_set_floor_priority)(!(e.disable_wall & S));
            var xe = (0, o.actor_corners_ex)(l, Q, ue, pe, fe, ge, ve, me, he, be, n, ne, _e, ie, se, ae, ce, re, de);
            if (ne = xe.up, ae = xe.down, re = xe.left, ie = xe.right, de = xe.upleft, _e = xe.upright, ce = xe.downleft, se = xe.downright, (0, o.actor_corners_restore_floor_priority)(), e.dying) return l.speed.x = 0, l.speed.y = Math.min(L, l.speed.y + i * E), l.mirror = null, l.angle = 0, l.visible = !0, e.blinking = !1, e.death_timer += E, e.dead = e.death_timer >= 2.5, l = (0, o.actor_change_animation)(l, (0, c.sprite_get_animation)(I, 8)), (0, p.v2d_new)(0, l.speed.y * E + .5 * i * E * E);
            if (e.dead) return (0, p.v2d_new)(0, 0);
            var we = (0, o.actor_handle_clouds)(l, $, ne, _e, ie, se, ae, ce, re, de);
            switch (ne = we.up, _e = we.upright, ie = we.right, re = we.left, de = we.upleft, ae = we.down, ce = we.downleft, se = we.downright, e.type) {
                case T:
                    l.carry_offset = (0, p.v2d_new)(l.mirror & f.IF_HFLIP ? 7 : -9, -40);
                    break;
                case D:
                    l.carry_offset = (0, p.v2d_new)(l.mirror & f.IF_HFLIP ? 7 : -7, -42);
                    break;
                case P:
                    l.carry_offset = (0, p.v2d_new)(l.mirror & f.IF_HFLIP ? 7 : -7, -42)
            }
            if (null != l.carried_by) {
                var Se = null,
                    Oe = void 0,
                    Le = 0,
                    ke = 0,
                    Re = l.carried_by;
                for (Oe = 0; Oe < t.length; Oe++)
                    if (t[Oe] == e) {
                        ke = Oe;
                        break
                    } for (Oe = 0; Oe < t.length; Oe++)
                    if (t[Oe].actor == Re) {
                        Se = t[Oe], Le = Oe, e.disable_wall = Se.disable_wall, e.entering_loop = Se.entering_loop, e.at_loopfloortop = Se.at_loopfloortop, e.bring_to_back = Se.bring_to_back;
                        break
                    } if (Se && (Se.type == D && !Se.flying || Se.getting_hit || Se.dying || Se.dead)) l.position = (0, p.v2d_new)(l.carried_by.position.x, l.carried_by.position.y), l.carried_by.carrying = null, l.carried_by = null;
                else {
                    if (!(ae && 0 == ae.brick_ref.angle && parseInt(Re.speed.y, 10) >= 5 || e.getting_hit || e.dying || e.dead)) {
                        var Ne = ke < Le ? (0, p.v2d_multiply)(Re.speed, E) : (0, p.v2d_new)(0, 0);
                        return l.speed = (0, p.v2d_new)(0, 0), l.mirror = Re.mirror, l.angle = 0, l = (0, o.actor_change_animation)(l, (0, c.sprite_get_animation)(I, 25)), l.position = (0, p.v2d_subtract)((0, p.v2d_add)(Re.position, Ne), l.carry_offset), (0, p.v2d_new)(0, 0)
                    }
                    l.position = (0, p.v2d_new)(l.carried_by.position.x, l.carried_by.position.y), l.carried_by.carrying = null, l.carried_by = null
                }
            }
            if (e.entering_loop = !1, e.got_speedshoes && (e.speedshoes_timer > k ? e.got_speedshoes = !1 : (j *= 1.5, e.speedshoes_timer += E)), oe(e) && l.is_jumping && (e.disable_wall &= ~S), e.spring && (ae && parseInt(l.speed.y, 10) >= 0 || e.flying || e.climbing) && (e.spring = !1), C = (ie && (0, s.input_button_down)(l.input, s.IB_RIGHT) || re && (0, s.input_button_down)(l.input, s.IB_LEFT)) && ae, e.on_moveable_platform = (0, p.v2d_magnitude)((0, v.level_brick_move_actor)(ae, l)) > f.EPSILON, (U = ae && (l.angle > 0 && l.angle < f.PI / 2 && l.speed.x > 0 || l.angle > 3 * f.PI / 2 && l.angle < 2 * f.PI && l.speed.x < 0)) && (de || _e) || Math.abs(l.angle) < f.EPSILON || Math.abs(l.angle - f.PI) < f.EPSILON) {
                if (ie && ie.brick_ref.angle % 90 == 0 && (l.speed.x > f.EPSILON || fe.x > ie.x) && (!U || U && 90 != ie.brick_ref.angle) && (l.speed.x = 0, l.position.x = ie.x + (ye.x - fe.x), !l.is_jumping && !e.flying && !e.climbing && Math.abs(l.speed.y) < f.EPSILON && (X = (0, c.sprite_get_animation)(I, C ? 14 : 0)), U)) return (0, p.v2d_new)(-5, 0);
                if (re && re.brick_ref.angle % 90 == 0 && (l.speed.x < -f.EPSILON || he.x < re.x + re.brick_ref.image.width) && (!U || U && 270 != re.brick_ref.angle) && (l.speed.x = 0, l.position.x = re.x + re.brick_ref.image.width + (ye.x - he.x), !l.is_jumping && !e.flying && !e.climbing && Math.abs(l.speed.y) < f.EPSILON && (X = (0, c.sprite_get_animation)(I, C ? 14 : 0)), U)) return (0, p.v2d_new)(5, 0);
                l.position.x <= l.hot_spot.x && (e.spin = !1, W = !0, l.position.x < l.hot_spot.x && (l.speed.x = 0, l.position.x = l.hot_spot.x, ae && (C = !0, X = (0, c.sprite_get_animation)(I, 1)))), l.position.x >= (0, v.level_size)().x - ((0, o.actor_image)(l).width - l.hot_spot.x) && (e.spin = !1, V = !0, l.position.x > (0, v.level_size)().x - ((0, o.actor_image)(l).width - l.hot_spot.x) && (l.speed.x = 0, l.position.x = (0, v.level_size)().x - ((0, o.actor_image)(l).width - l.hot_spot.x), ae && (C = !0, X = (0, c.sprite_get_animation)(I, 1))))
            }
            if (!e.climbing) {
                if (ae) {
                    var Te = ae.brick_ref.angle,
                        De = void 0,
                        Pe = void 0,
                        Me = 1;
                    if (H = !0, l.ignore_horizontal = !1, e.is_fire_jumping = !1, l.is_jumping = !1, ae.brick_ref && ae.brick_ref.behavior == a.BRB_FALL && ae.state == a.BRS_IDLE && (ae.state = a.BRS_ACTIVE), Math.abs(l.speed.x) < f.EPSILON) {
                        if (Te % 180 == 0 && (e.spin = !1), (0, s.input_button_down)(l.input, s.IB_DOWN)) e.spin_dash || (X = (0, c.sprite_get_animation)(I, 4)), (0, s.input_button_pressed)(l.input, s.IB_FIRE1) && (X = (0, c.sprite_get_animation)(I, 6), e.spin_dash = !0, (0, r.sound_play)((0, _.soundfactory_get)("charge")));
                        else if (!C)
                            if ((0, s.input_button_down)(l.input, s.IB_UP)) G && e.at_some_border || (X = (0, c.sprite_get_animation)(I, 5));
                            else if (oe(e)) X = (0, c.sprite_get_animation)(I, 0);
                        else {
                            var Ae = void 0,
                                je = void 0,
                                Be = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(-8, 0), -l.angle)),
                                Ce = (0, p.v2d_add)(ye, (0, p.v2d_rotate)((0, p.v2d_new)(5, 0), -l.angle)),
                                Fe = (0, p.v2d_new)(0, 0),
                                He = (0, o.actor_corners_ex)(l, Q, Fe, Fe, Fe, Ce, Fe, Be, Fe, Fe, n, null, null, null, je, null, Ae, null, null);
                            He.downleft && He.downright || e.on_moveable_platform ? (0, s.input_button_down)(l.input, s.IB_LEFT) && (W || e.at_some_border) || (0, s.input_button_down)(l.input, s.IB_RIGHT) && (V || e.at_some_border) ? (l.mirror = W ? f.IF_HFLIP : f.IF_NONE, X = (0, c.sprite_get_animation)(I, 1)) : X = (0, c.sprite_get_animation)(I, 0) : X = (0, c.sprite_get_animation)(I, 10)
                        }
                        if (e.spin_dash) {
                            var Ge = void 0,
                                Ve = l.mirror & f.IF_HFLIP ? 1 : -1,
                                We = void 0,
                                Ue = void 0,
                                Ye = void 0;
                            for (Ge = 0; Ge < 3; Ge++) 128 + (0, g.random)(128), Ye = (0, d.image_create)(1, 1), (0, d.image_clear)(Ye, 255, 255, 255), We = (0, p.v2d_new)(Ve * (7 + (0, g.random)(7)), 2), Ue = (0, p.v2d_new)(Ve * (50 + (0, g.random)(200)), -(0, g.random)(200)), (0, v.level_create_particle)(Ye, (0, p.v2d_add)(l.position, We), Ue, !0);
                            ((0, s.input_button_up)(l.input, s.IB_DOWN) || (0, v.level_editmode)()) && (e.spin = !0, e.spin_dash = !1, (!(l.mirror & f.IF_HFLIP) || re || W) && (l.mirror & f.IF_HFLIP || ie || V) || (l.speed.x = (l.mirror & f.IF_HFLIP ? -1 : 1) * j * 1.35), (0, r.sound_play)((0, _.soundfactory_get)("release")), e.disable_jump_for = .05)
                        }
                    } else if ((0, s.input_button_down)(l.input, s.IB_DOWN) && (e.spin || (0, r.sound_play)((0, _.soundfactory_get)("roll")), e.spin = !0), e.spin || e.braking) {
                        if (e.spin) X = (0, c.sprite_get_animation)(I, 3);
                        else if (e.braking) {
                            var Xe = l.mirror & f.IF_HFLIP ? 1 : -1,
                                Ke = void 0,
                                ze = void 0,
                                qe = void 0;
                            128 + (0, g.random)(128), qe = (0, d.image_create)(1, 1), Ke = (0, p.v2d_new)(Xe * (10 - (0, g.random)(21)), 0), ze = (0, p.v2d_new)(Xe * (50 + (0, g.random)(200)), -(0, g.random)(200)), (0, v.level_create_particle)(qe, (0, p.v2d_add)(l.position, Ke), ze, !0), X = (0, c.sprite_get_animation)(I, 7), Math.abs(l.speed.x) < 10 && (e.braking = !1)
                        }
                    } else {
                        var $e = .75 * j,
                            Qe = .35 * j;
                        Math.abs(l.speed.x) < $e ? !C && l.speed.y >= 0 && (X = (0, c.sprite_get_animation)(I, 1), l = (0, o.actor_change_animation_speed_factor)(l, .5 + Math.abs(l.speed.x) / $e * 1.5)) : X = (0, c.sprite_get_animation)(I, 2), Math.abs(l.speed.x) >= Qe && ((0, s.input_button_down)(l.input, s.IB_RIGHT) && l.speed.x < 0 || (0, s.input_button_down)(l.input, s.IB_LEFT) && l.speed.x > 0) && ((0, r.sound_play)((0, _.soundfactory_get)("brake")), e.braking = !0)
                    }
                    if (e.disable_jump_for = Math.max(e.disable_jump_for - E, 0), Math.abs(l.speed.x) < f.EPSILON && (e.disable_jump_for = 0), De = !e.spin_dash, (0, s.input_button_down)(l.input, s.IB_FIRE1) && e.disable_jump_for <= 0 && !(0, s.input_button_down)(l.input, s.IB_DOWN) && !ne && !e.landing && De && !l.is_jumping && ((0, r.sound_play)((0, _.soundfactory_get)("jump")), l.angle = m, l.is_jumping = !0, e.is_fire_jumping = !0, Y = !0, e.spin = !1, X = (0, c.sprite_get_animation)(I, 3), 0 == Te ? l.speed.y = -l.jump_strength * Me : Te > 0 && Te < 90 ? Te > 45 ? (l.speed.x = Math.min(l.speed.x, -.7 * l.jump_strength * Me), l.speed.y = -.7 * l.jump_strength * Me) : (l.speed.x *= l.speed.x > 0 ? .5 : 1, l.speed.y = -l.jump_strength * Me) : 90 == Te ? ((0, o.actor_move)(l, (0, p.v2d_new)(20 * $, 0)), l.speed.x = Math.min(l.speed.x, -l.jump_strength * Me), l.speed.y = -l.jump_strength / 2 * Me) : Te > 90 && Te < 180 ? ((0, o.actor_move)(l, (0, p.v2d_new)(0, -20 * $)), l.speed.x = Math.min(l.speed.x, -.7 * l.jump_strength * Me), l.speed.y = l.jump_strength * Me) : 180 == Te ? ((0, o.actor_move)(l, (0, p.v2d_new)(0, -20 * $)), l.speed.x *= -1, l.speed.y = l.jump_strength * Me) : Te > 180 && Te < 270 ? ((0, o.actor_move)(l, (0, p.v2d_new)(0, -20 * $)), l.speed.x = Math.max(l.speed.x, .7 * l.jump_strength * Me), l.speed.y = l.jump_strength * Me) : 270 == Te ? ((0, o.actor_move)(l, (0, p.v2d_new)(-20 * $, 0)), l.speed.x = Math.max(l.speed.x, l.jump_strength * Me), l.speed.y = -l.jump_strength / 2 * Me) : Te > 270 && Te < 360 && (Te < 315 ? (l.speed.x = Math.max(l.speed.x, .7 * l.jump_strength * Me), l.speed.y = -.7 * l.jump_strength * Me) : (l.speed.x *= l.speed.x < 0 ? .5 : 1, l.speed.y = -l.jump_strength * Me))), !l.is_jumping) {
                        var Je = void 0,
                            Ze = 1.2,
                            et = 25;
                        Te > 0 && Te < 90 ? (Je = .8 * Math.min(1, Math.tan(Te * f.PI / 180)), Math.abs(l.speed.y) > f.EPSILON ? l.speed.x = H && Te <= 45 ? l.speed.x : Math.max(-Ze * j, -1 * Je * l.speed.y) : (Pe = (l.mirror & f.IF_HFLIP ? 2 : 1) * Je, e.braking && Te < 45 ? Pe *= 8 * (l.speed.x < 0 ? -.5 : 1) : Math.abs(l.speed.x) < 5 && (Pe *= Math.sin(Te * f.PI / 180) * et, e.lock_accel = y), l.speed.x = Math.max(l.speed.x - 700 * Pe * E, -Ze * j))) : Te > 270 && Te < 360 && (Je = .8 * Math.min(1, -Math.tan(Te * f.PI / 180)), Math.abs(l.speed.y) > f.EPSILON ? l.speed.x = H && Te >= 315 ? l.speed.x : Math.min(Ze * j, 1 * Je * l.speed.y) : (Pe = (l.mirror & f.IF_HFLIP ? 1 : 2) * Je, e.braking && Te > 315 ? Pe *= 8 * (l.speed.x > 0 ? -.5 : 1) : Math.abs(l.speed.x) < 5 && (Pe *= -Math.sin(Te * f.PI / 180) * et, e.lock_accel = b), l.speed.x = Math.min(l.speed.x + 700 * Pe * E, Ze * j)))
                    }
                    Te % 90 == 0 && (e.lock_accel = h), ce && se && Math.abs(l.speed.x) < 40 && ce.brick_ref.angle > 270 && ce.brick_ref.angle < 360 && se.brick_ref.angle > 0 && se.brick_ref.angle < 90 && ((0, s.input_button_down)(l.input, s.IB_LEFT) || (0, s.input_button_down)(l.input, s.IB_RIGHT) || (l.speed.x = 0))
                } else e.braking = !1, e.lock_accel = h, e.spin_dash && (e.spin_dash = !1, X = (0, c.sprite_get_animation)(I, 1)), l.animation != (0, c.sprite_get_animation)(I, 0) && l.animation != (0, c.sprite_get_animation)(I, 10) && l.animation != (0, c.sprite_get_animation)(I, 5) || (X = (0, c.sprite_get_animation)(I, 1)), (e.spring || G || l.speed.y < 0) && (e.spin = !1), oe(e) || (l.angle = m);
                if (ae || e.is_fire_jumping && l.speed.y < -l.jump_strength * N && (0, s.input_button_up)(l.input, s.IB_FIRE1) && (l.speed.y *= .7), e.type == D && e.flying ? (A = e.flight_timer < R ? .15 : .8, L *= .3) : A = 1, B.y = Math.abs(l.speed.y) > f.EPSILON ? l.speed.y * E + i * A * .5 * (E * E) : 0, e.type == P && e.flying || (l.speed.y = Math.min(l.speed.y + i * A * E, L)), F = ne && ne.brick_ref.angle % 90 != 0 && Math.abs(l.angle) < f.EPSILON, ne && (ne.brick_ref.angle % 90 == 0 || F) && l.speed.y < -f.EPSILON && (l.position.y = ne.y + ne.brick_ref.image.height + (ye.y - ue.y), l.speed.y = 10, ne.brick_ref.behavior == a.BRB_CIRCULAR && Math.sin(ne.brick_ref.behavior_arg[3] * ne.value[0]) > 0)) return l.speed.y = 100, B = (0, p.v2d_add)(B, (0, p.v2d_multiply)((0, v.level_brick_move_actor)(ne, l), E));
                if ((le = ae) && !l.is_jumping) {
                    var tt = le.brick_ref.angle;
                    l.speed.y = B.y = 0, l.angle = tt * f.PI / 180;
                    if (0 == tt) {
                        var nt = (0, v.level_brick_move_actor)(ae, l);
                        ye.y = le.y, M = 0, nt.y > f.EPSILON ? B.y += nt.y * E : l.position.y = ye.y + $ + 1
                    } else if (tt > 0 && tt < 90) ye.y = parseInt(le.y + le.brick_ref.image.height - (l.position.x - le.x) * Math.tan(l.angle), 10), l.speed.x < 0 && (ye.y += 2), l.position.y = ye.y + $, l.mirror & f.IF_HFLIP || (M = .2);
                    else if (90 == tt) {
                        if (Math.abs(l.speed.x) > 5) {
                            var ot = se ? se.brick_ref.angle : -1;
                            se && ot >= tt && ot < tt + 90 ? e.flying || (l.position.x = le.x + $) : (l.angle = m, l.is_jumping = !0, e.spin || e.flying || (X = (0, c.sprite_get_animation)(I, 1)), oe(e) || (e.flying || (0, o.actor_move)(l, (0, p.v2d_new)(6.5 * $, 0)), l.speed = (0, p.v2d_new)(0, -.9 * Math.abs(l.speed.x))))
                        } else l.angle = m, e.flying || (0, o.actor_move)(l, (0, p.v2d_new)(5 * $, 0)), l.is_jumping = !0, l.ignore_horizontal = !1;
                        l.mirror & f.IF_HFLIP || (M = 1.5)
                    } else if (tt > 90 && tt < 180) Math.abs(l.speed.x) > 5 ? (ye.y = le.y - (l.position.x - le.x) * Math.tan(l.angle), l.position.y = ye.y - $) : (l.angle = m, (0, o.actor_move)(l, (0, p.v2d_new)(0, -15 * $)), l.is_jumping = !0), M = 1.5;
                    else if (180 == tt) Math.abs(l.speed.x) > 5 ? (ye.y = le.y + le.brick_ref.image.height, l.position.y = ye.y - $, (l.speed.x > 0 && !se || l.speed.x < 0 && !ce) && ((0, o.actor_move)(l, (0, p.v2d_new)(0, 15 * $)), l.is_jumping = !0, l.speed.x *= -1, l.mirror = l.speed.x < 0 ? f.IF_HFLIP : f.IF_NONE, l.angle = m)) : (l.angle = m, (0, o.actor_move)(l, (0, p.v2d_new)(0, -20 * $)), l.is_jumping = !0, l.speed.x = 0), M = 1.2;
                    else if (tt > 180 && tt < 270) Math.abs(l.speed.x) > 5 ? (ye.y = le.y + le.brick_ref.image.height - (l.position.x - le.x) * Math.tan(l.angle), l.position.y = ye.y - $) : (l.angle = m, (0, o.actor_move)(l, (0, p.v2d_new)(0, -15 * $)), l.is_jumping = !0), M = 1.5;
                    else if (270 == tt) {
                        if (Math.abs(l.speed.x) > 5) {
                            var ot = ce ? ce.brick_ref.angle : -1;
                            ce && ot > tt - 90 && ot <= tt ? e.flying || (l.position.x = le.x + le.brick_ref.image.width - $) : (l.angle = m, l.is_jumping = !0, e.spin || e.flying || (X = (0, c.sprite_get_animation)(I, 1)), oe(e) || (e.flying || (0, o.actor_move)(l, (0, p.v2d_new)(-6.5 * $, 0)), l.speed = (0, p.v2d_new)(0, -.9 * Math.abs(l.speed.x))))
                        } else l.angle = m, e.flying || (0, o.actor_move)(l, (0, p.v2d_new)(-5 * $, 0)), l.is_jumping = !0, l.ignore_horizontal = !1;
                        l.mirror & f.IF_HFLIP && (M = 1.5)
                    } else tt > 270 && tt < 360 && (ye.y = le.y - (l.position.x - le.x) * Math.tan(l.angle), l.speed.x > 0 && (ye.y += 2), l.position.y = ye.y + $, l.mirror & f.IF_HFLIP && (M = .2))
                }
                if (B.x = Math.abs(l.speed.x) > f.EPSILON ? l.speed.x * E + (1 - M) * l.acceleration * .5 * (E * E) : 0, !(0, s.input_button_down)(l.input, s.IB_LEFT) || (0, s.input_button_down)(l.input, s.IB_RIGHT) || e.spin || e.braking || e.landing || e.getting_hit || e.lock_accel == b || W)
                    if (!(0, s.input_button_down)(l.input, s.IB_RIGHT) || (0, s.input_button_down)(l.input, s.IB_LEFT) || e.spin || e.braking || e.landing || e.getting_hit || e.lock_accel == y || V) {
                        if (ae) {
                            var at = 0,
                                it = ae.brick_ref.angle,
                                rt = 0;
                            rt = e.spin ? .65 : e.braking ? 4.5 : e.landing ? .6 : 1, it % 90 == 0 ? at = 90 == it ? -1 : 270 == it ? 1 : l.speed.x > f.EPSILON ? -1 : -l.speed.x > f.EPSILON ? 1 : 0 : (it > 90 && it < 180 || it > 180 && it < 270) && (at = l.speed.x > f.EPSILON ? -1 : -l.speed.x > f.EPSILON ? 1 : 0), l.speed.x += at * rt * l.acceleration * E
                        }
                    } else l.ignore_horizontal || !(l.is_jumping || e.spring || G) && (0, s.input_button_down)(l.input, s.IB_DOWN) || (l.mirror = !1, M = l.speed.x < 0 ? -1 : M, l.speed.x <= 1.1 * j && (l.speed.x = Math.min(l.speed.x + (1 - M) * l.acceleration * E, j)));
                else l.ignore_horizontal || !(l.is_jumping || e.spring || G) && (0, s.input_button_down)(l.input, s.IB_DOWN) || (l.mirror = f.IF_HFLIP, M = l.speed.x > 0 ? -1 : M, l.speed.x >= 1.1 * -j && (l.speed.x = Math.max(l.speed.x - (1 - M) * l.acceleration * E, -j)))
            }
            switch (e.spring && (X = (0, c.sprite_get_animation)(I, l.speed.y <= 0 ? 13 : 1), l.speed.y > 0 && (e.spring = !1, l.is_jumping = !1)), e.getting_hit && (ae ? e.getting_hit = !1 : X = (0, c.sprite_get_animation)(I, 11)), e.type) {
                case T:
                    break;
                case D:
                    if (e.flight_timer += E, ae && 90 != ae.brick_ref.angle && 270 != ae.brick_ref.angle && (e.flying = !1, e.flight_timer = 0), (l.is_jumping && l.speed.y > -l.jump_strength / 3 && !Y && !e.getting_hit || e.flying) && (0, s.input_button_pressed)(l.input, s.IB_FIRE1) && !e.getting_hit && e.flight_timer < R && (e.flying || (e.flight_timer = 0), l.speed.y = .1 * -(0, v.level_gravity)(), e.flying = !0, l.is_jumping = !1, e.is_fire_jumping = !1), e.flying)
                        if (X = (0, c.sprite_get_animation)(I, l.carrying ? 16 : 20), l.speed.x = (0, g.clip)(l.speed.x, -l.maxspeed / 2, l.maxspeed / 2), e.flight_timer >= R) {
                            var _t = (0, _.soundfactory_get)("tired of flying");
                            (0, r.sound_is_playing)(_t) || (0, r.sound_play)(_t), X = (0, c.sprite_get_animation)(I, 19)
                        } else {
                            var st = void 0,
                                ct = void 0;
                            for (oe(e) && (l.angle = m), st = (0, _.soundfactory_get)("flying"), (0, r.sound_is_playing)(st) || (0, r.sound_play)(st), ct = 0; ct < t.length && null == l.carrying; ct++)
                                if (t[ct] != e && parseInt(l.speed.y, 10) <= 0) {
                                    var dt = [t[ct].actor.position.x + .3 * (0, o.actor_image)(t[ct].actor).width, t[ct].actor.position.y, t[ct].actor.position.x + .7 * (0, o.actor_image)(t[ct].actor).width, t[ct].actor.position.y + .2 * (0, o.actor_image)(t[ct].actor).height],
                                        lt = [l.position.x + .3 * (0, o.actor_image)(l).width, l.position.y + .7 * (0, o.actor_image)(l).height, l.position.x + .7 * (0, o.actor_image)(l).width, l.position.y + (0, o.actor_image)(l).height],
                                        ut = (0, g.bounding_box)(dt, lt),
                                        pt = !(null != t[ct].actor.carried_by || t[ct].dying || t[ct].dead || t[ct].climbing || t[ct].landing || t[ct].getting_hit);
                                    ut && pt && !ae && (l.carrying = t[ct].actor, t[ct].actor.carried_by = l, t[ct].spin = t[ct].spin_dash = t[ct].braking = t[ct].flying = t[ct].spring = t[ct].on_moveable_platform = !1, (0, r.sound_play)((0, _.soundfactory_get)("touch the wall")))
                                }
                        }
                    else l.animation == (0, c.sprite_get_animation)(I, l.carrying ? 16 : 20) && (X = (0, c.sprite_get_animation)(I, 1));
                    break;
                case P:
                    if ((l.is_jumping && l.speed.y > -.7 * l.jump_strength || e.flying) && (0, s.input_button_pressed)(l.input, s.IB_FIRE1) && !ae && !e.getting_hit && (l.speed.y = 50, e.flying = !0, l.is_jumping = !1, e.is_fire_jumping = !1, l.speed.x = l.mirror & f.IF_HFLIP ? Math.min(-100, l.speed.x) : Math.max(100, l.speed.x)), e.flying) {
                        var ft = (0, s.input_button_down)(l.input, s.IB_LEFT) && l.speed.x > 0 || (0, s.input_button_down)(l.input, s.IB_RIGHT) && l.speed.x < 0,
                            gt = ae && Math.abs(ae.brick_ref.angle * f.PI / 180 - m) < f.EPSILON;
                        if (ft += l.animation == (0, c.sprite_get_animation)(I, 21) && !(0, o.actor_animation_finished)(l), gt || l.animation == (0, c.sprite_get_animation)(I, 19) || e.landing || (l.mirror & f.IF_HFLIP ? (X = (0, c.sprite_get_animation)(I, ft ? 21 : 20), l.speed.x = Math.max(l.speed.x - .5 * l.acceleration * E, -j / 2)) : (X = (0, c.sprite_get_animation)(I, ft ? 21 : 20), l.speed.x = Math.min(l.speed.x + .5 * l.acceleration * E, j / 2))), gt) e.landing = !0, l.is_jumping = !1, X = (0, c.sprite_get_animation)(I, 19), l.speed.y = 0, B.y = 0, e.climbing = !1;
                        else if ((0, s.input_button_up)(l.input, s.IB_FIRE1)) e.flying = !1, X = (0, c.sprite_get_animation)(I, 18);
                        else {
                            var vt = void 0,
                                mt = [re, ce, ie, se, ae];
                            for (vt = 0; vt < mt.length; vt++)(le = mt[vt]) && le.brick_ref.angle % 90 != 0 && (e.flying = !1, e.landing = !1)
                        }
                        gt || ne || (re && re.brick_ref.angle % 90 == 0 || ie && ie.brick_ref.angle % 90 == 0) && (e.climbing = !0, e.flying = !1, (0, r.sound_play)((0, _.soundfactory_get)("touch the ground")))
                    }
                    if (e.landing && (Math.abs(l.speed.x) < f.EPSILON || !ae) && (e.flying = e.landing = !1), e.climbing) {
                        var ht = (0, p.v2d_new)(0, 0);
                        if (l.speed.x = B.x = 0, re && !ie && (l.mirror |= f.IF_HFLIP), ie && !re && (l.mirror &= ~f.IF_HFLIP), ht = (0, p.v2d_add)(ht, (0, p.v2d_multiply)((0, v.level_brick_move_actor)(re, l), E)), ht = (0, p.v2d_add)(ht, (0, p.v2d_multiply)((0, v.level_brick_move_actor)(ie, l), E)), (ht.y <= 0 && !ne || ht.y >= 0 && !ae || !re && ie) && (B = (0, p.v2d_add)(B, ht)), re || ie)
                            if ((0, s.input_button_pressed)(l.input, s.IB_FIRE1)) {
                                var bt = (0, c.sprite_get_animation)(I, 17),
                                    yt = (0, c.sprite_get_animation)(I, 22);
                                l.animation != bt && l.animation != yt || (e.climbing = !1, l.is_jumping = !0, e.is_fire_jumping = !0, l.speed.x = .7 * (l.mirror & f.IF_HFLIP ? 1 : -1) * l.jump_strength, l.speed.y = -.5 * l.jump_strength, re && !ie && (l.mirror &= ~f.IF_HFLIP), !re && ie && (l.mirror |= f.IF_HFLIP), X = (0, c.sprite_get_animation)(I, 3), (0, r.sound_play)((0, _.soundfactory_get)("jump")))
                            } else(0, s.input_button_down)(l.input, s.IB_UP) ? ne || (B.y = .1 * -j * E, X = (0, c.sprite_get_animation)(I, 17)) : (0, s.input_button_down)(l.input, s.IB_DOWN) ? ae ? e.climbing = !1 : (B.y = .1 * j * E, X = (0, c.sprite_get_animation)(I, 17)) : X = (0, c.sprite_get_animation)(I, 22);
                        else le = l.mirror & f.IF_HFLIP ? ce : se, le ? (X = (0, c.sprite_get_animation)(I, 23), l.ignore_horizontal = !0, B = (0, p.v2d_add)(B, (0, p.v2d_multiply)((0, v.level_brick_move_actor)(le, l), E)), (0, o.actor_animation_finished)(l) && (e.climbing = !1, l.ignore_horizontal = !1, l.speed = (0, p.v2d_new)((l.mirror & f.IF_HFLIP ? -1 : 1) * j * .15, -(0, v.level_gravity)() / 12.5), B.x = 5 * (l.mirror & f.IF_HFLIP ? -1 : 1))) : (e.climbing = !1, l.is_jumping = !0, X = (0, c.sprite_get_animation)(I, 3))
                    }
            }
            return e.at_some_border = !1, X && (l = (0, o.actor_change_animation)(l, X)), Math.abs(l.speed.x) < 4 && (e.braking = !1, (!(0, s.input_button_down)(l.input, s.IB_RIGHT) && !(0, s.input_button_down)(l.input, s.IB_LEFT) || (0, s.input_button_down)(l.input, s.IB_RIGHT) && (0, s.input_button_down)(l.input, s.IB_LEFT) || e.spin || e.landing) && (B.x = 0, l.speed.x = 0)), B.x += (0, v.level_brick_move_actor)(ae, l).x * E, B.x = l.position.x <= l.hot_spot.x && l.speed.x < 0 ? 0 : B.x, B.x = l.position.x >= (0, v.level_size)().x - ((0, o.actor_image)(l).width - l.hot_spot.x) && l.speed.x > 0 ? 0 : B.x, B
        }),
        X = (t.player_hit = function(e) {
            var t = e.actor,
                n = void 0,
                a = void 0,
                s = !1;
            if (!e.blinking && !e.dying && !e.invincible)
                if (te(e), e.shield_type != M) s = !0, e.shield_type = M, (0, r.sound_play)((0, _.soundfactory_get)("death"));
                else if (G > 0) {
                for (s = !0, a = 0; a < Math.min(q(), 15); a++) n = (0, v.level_create_item)(i.IT_RING, t.position), n.is_moving = !0, n.actor.speed.x = n.actor.maxspeed * ((0, g.random)(100) - 50) / 100, n.actor.speed.y = -n.actor.jump_strength + (0, g.random)(n.actor.jump_strength);
                Q(0), (0, r.sound_play)((0, _.soundfactory_get)("ringless"))
            } else X(e);
            s && (e.getting_hit = !0, e.flying = e.landing = e.climbing = e.spring = !1, e.is_fire_jumping = !1, e.spin_dash = e.spin = !1, e.blinking = !0, e.blink_timer = 0, t.speed.x = t.mirror & f.IF_HFLIP ? 200 : -200, t.speed.y = -(.75 * t.jump_strength), (0, o.actor_move)(t, (0, p.v2d_new)(0, -5)))
        }, t.player_kill = function(e) {
            e.dying || (te(e), e.shield_type = M, e.invincible = !1, e.got_speedshoes = !1, e.dying = !0, e.death_timer = 0, e.spring = !1, e.actor.speed.y = 1.2 * -e.actor.jump_strength, e.flying = e.climbing = e.landing = !1, e.is_fire_jumping = !1, e.spin = e.spin_dash = !1, e.blinking = !1, (0, r.sound_play)((0, _.soundfactory_get)("death")))
        }),
        K = t.player_bounce = function(e) {
            (0, s.input_simulate_button_down)(e.actor.input, s.IB_FIRE1), e.spring = !1, e.actor.speed.y = -e.actor.jump_strength, e.actor.is_jumping = !0, e.is_fire_jumping = !1, e.flying = !1
        },
        z = t.player_attacking = function(e) {
            var t = (0, c.sprite_get_animation)(Z(e.type), 3);
            return e.spin || e.spin_dash || e.actor.animation == t || e.type == P && (e.landing || e.flying)
        },
        q = t.player_get_rings = function() {
            return G
        },
        $ = t.player_get_lives = function() {
            return W
        },
        Q = (t.player_get_score = function() {
            return U
        }, t.player_get_sprite_name = function(e) {
            return Z(e.type)
        }, t.player_set_rings = function(e) {
            G = (0, g.clip)(e, 0, 9999), e / 100 >= V && (V += 1, J($() + 1), (0, v.level_override_music)((0, _.soundfactory_get)("1up")))
        }),
        J = t.player_set_lives = function(e) {
            W = e
        },
        Z = (t.player_set_score = function(e) {
            U = e
        }, function(e) {
            switch (e) {
                case T:
                    return "SD_SONIC";
                case D:
                    return "SD_TAILS";
                case P:
                    return "SD_KNUCKLES";
                default:
                    return "null"
            }
        }),
        ee = function(e) {
            if (e && e.actor) {
                var t = 0,
                    n = e.actor.mirror & f.IF_HFLIP,
                    a = !0,
                    i = (0, g.old_school_angle)(e.actor.angle),
                    r = (0, p.v2d_new)(0, 0),
                    _ = (0, p.v2d_subtract)(e.actor.position, (0, p.v2d_rotate)((0, p.v2d_new)(0, e.actor.hot_spot.y), -i)),
                    s = e.actor.animation;
                switch (e.type) {
                    case T:
                        if (s == (0, c.sprite_get_animation)(Z(T), 0)) r = (0, p.v2d_new)(3, 24), t = 1;
                        else if (s == (0, c.sprite_get_animation)(Z(T), 1)) switch (parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    t = 2, r = (0, p.v2d_new)(5, 23);
                                    break;
                                case 1:
                                    t = 2, r = (0, p.v2d_new)(4, 25);
                                    break;
                                case 2:
                                    t = 1, r = (0, p.v2d_new)(7, 25);
                                    break;
                                case 3:
                                    t = 1, r = (0, p.v2d_new)(5, 23);
                                    break;
                                case 4:
                                    t = 1, r = (0, p.v2d_new)(5, 23);
                                    break;
                                case 5:
                                    t = 1, r = (0, p.v2d_new)(4, 24);
                                    break;
                                case 6:
                                    t = 2, r = (0, p.v2d_new)(6, 24);
                                    break;
                                case 7:
                                    t = 2, r = (0, p.v2d_new)(6, 23)
                            } else if (s == (0, c.sprite_get_animation)(Z(T), 2)) t = 1, r = (0, p.v2d_new)(8, 26);
                            else if (s == (0, c.sprite_get_animation)(Z(T), 5)) t = 3, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(0, 19) : (0, p.v2d_new)(-1, 21);
                        else if (s == (0, c.sprite_get_animation)(Z(T), 7)) t = 1, r = parseInt(e.actor.animation_frame, 10) < 2 ? (0, p.v2d_new)(8, 26) : (0, p.v2d_new)(10, 28);
                        else if (s == (0, c.sprite_get_animation)(Z(T), 10)) switch (t = 1, parseInt(e.actor.animation_frame, 10)) {
                            case 0:
                                r = (0, p.v2d_new)(1, 22);
                                break;
                            case 1:
                                r = (0, p.v2d_new)(-1, 23);
                                break;
                            case 2:
                                r = (0, p.v2d_new)(1, 23)
                        } else s == (0, c.sprite_get_animation)(Z(T), 11) ? (t = 3, r = (0, p.v2d_new)(-4, 30)) : s == (0, c.sprite_get_animation)(Z(T), 12) ? (t = 3, r = (0, p.v2d_new)(1, 19)) : s == (0, c.sprite_get_animation)(Z(T), 13) ? (t = 3, r = (0, p.v2d_new)(4, 13)) : s == (0, c.sprite_get_animation)(Z(T), 14) ? (t = 1, r = (0, p.v2d_new)(12, 31)) : s == (0, c.sprite_get_animation)(Z(T), 15) ? (t = 0, r = (0, p.v2d_new)(3, 23)) : s == (0, c.sprite_get_animation)(Z(T), 25) ? (t = 0, r = (0, p.v2d_new)(3, 22)) : a = !1;
                        break;
                    case D:
                        if (s == (0, c.sprite_get_animation)(Z(D), 0)) r = (0, p.v2d_new)(5, 34), t = 1;
                        else if (s == (0, c.sprite_get_animation)(Z(D), 1)) switch (t = 2, parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    r = (0, p.v2d_new)(2, 33);
                                    break;
                                case 1:
                                    r = (0, p.v2d_new)(3, 33);
                                    break;
                                case 2:
                                    r = (0, p.v2d_new)(8, 33);
                                    break;
                                case 3:
                                    r = (0, p.v2d_new)(3, 32);
                                    break;
                                case 4:
                                    r = (0, p.v2d_new)(1, 33);
                                    break;
                                case 5:
                                    r = (0, p.v2d_new)(3, 33);
                                    break;
                                case 6:
                                    r = (0, p.v2d_new)(7, 33);
                                    break;
                                case 7:
                                    r = (0, p.v2d_new)(3, 32)
                            } else if (s == (0, c.sprite_get_animation)(Z(D), 2)) t = 2, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(7, 35) : (0, p.v2d_new)(6, 34);
                            else if (s == (0, c.sprite_get_animation)(Z(D), 4)) t = 1, r = (0, p.v2d_new)(9, 44);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 5)) t = 1, r = (0, p.v2d_new)(7, 32);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 7)) t = 1, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(2, 33) : (0, p.v2d_new)(4, 33);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 10)) switch (t = 4, parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    r = (0, p.v2d_new)(5, 33);
                                    break;
                                case 1:
                                    r = (0, p.v2d_new)(6, 33)
                            } else if (s == (0, c.sprite_get_animation)(Z(D), 11)) t = 1, r = (0, p.v2d_new)(1, 33);
                            else if (s == (0, c.sprite_get_animation)(Z(D), 12)) t = 1, r = (0, p.v2d_new)(6, 28);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 13)) t = 3, r = (0, p.v2d_new)(2, 17);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 14)) t = 1, r = (0, p.v2d_new)(9, 35);
                        else if (s == (0, c.sprite_get_animation)(Z(D), 15)) switch (t = 4, parseInt(e.actor.animation_frame, 10)) {
                            case 0:
                            case 8:
                            case 9:
                            case 10:
                                r = (0, p.v2d_new)(5, 34);
                                break;
                            default:
                                r = (0, p.v2d_new)(5, 33)
                        } else s == (0, c.sprite_get_animation)(Z(D), 16) ? (t = 1, r = (0, p.v2d_new)(8, 37)) : s == (0, c.sprite_get_animation)(Z(D), 19) ? (t = 1, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(9, 39) : (0, p.v2d_new)(9, 40)) : s == (0, c.sprite_get_animation)(Z(D), 20) ? (t = 1, r = (0, p.v2d_new)(8, 39)) : s == (0, c.sprite_get_animation)(Z(D), 25) ? (t = 1, r = (0, p.v2d_new)(0, 23)) : a = !1;
                        break;
                    case P:
                        if (s == (0, c.sprite_get_animation)(Z(P), 0)) t = 1, r = (0, p.v2d_new)(1, 24);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 1)) switch (parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    t = 1, r = (0, p.v2d_new)(5, 29);
                                    break;
                                case 1:
                                    t = 2, r = (0, p.v2d_new)(5, 29);
                                    break;
                                case 2:
                                    t = 2, r = (0, p.v2d_new)(8, 29);
                                    break;
                                case 3:
                                    t = 2, r = (0, p.v2d_new)(9, 28);
                                    break;
                                case 4:
                                    t = 1, r = (0, p.v2d_new)(6, 28);
                                    break;
                                case 5:
                                    t = 1, r = (0, p.v2d_new)(6, 29);
                                    break;
                                case 6:
                                    t = 1, r = (0, p.v2d_new)(5, 28);
                                    break;
                                case 7:
                                    t = 1, r = (0, p.v2d_new)(4, 27)
                            } else if (s == (0, c.sprite_get_animation)(Z(P), 2)) t = 1, r = (0, p.v2d_new)(7, 29);
                            else if (s == (0, c.sprite_get_animation)(Z(P), 4)) t = 1, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(0, 31) : (0, p.v2d_new)(0, 40);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 5)) t = 1, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(0, 21) : (0, p.v2d_new)(-1, 21);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 7)) t = 0, r = (0, p.v2d_new)(-2, 27);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 10)) switch (t = 1, parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    r = (0, p.v2d_new)(9, 30);
                                    break;
                                case 1:
                                    r = (0, p.v2d_new)(8, 27)
                            } else if (s == (0, c.sprite_get_animation)(Z(P), 11)) t = 1, r = (0, p.v2d_new)(-3, 27);
                            else if (s == (0, c.sprite_get_animation)(Z(P), 12)) t = 1, r = (0, p.v2d_new)(5, 24);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 13)) t = 3, r = (0, p.v2d_new)(-1, 16);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 14)) switch (parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    t = 1, r = (0, p.v2d_new)(5, 29);
                                    break;
                                case 1:
                                    t = 2, r = (0, p.v2d_new)(5, 29);
                                    break;
                                case 2:
                                    t = 2, r = (0, p.v2d_new)(8, 29);
                                    break;
                                case 3:
                                    t = 2, r = (0, p.v2d_new)(9, 28);
                                    break;
                                case 4:
                                    t = 1, r = (0, p.v2d_new)(6, 28);
                                    break;
                                case 5:
                                    t = 1, r = (0, p.v2d_new)(6, 29);
                                    break;
                                case 6:
                                    t = 1, r = (0, p.v2d_new)(5, 28);
                                    break;
                                case 7:
                                    t = 1, r = (0, p.v2d_new)(4, 27)
                            } else if (s == (0, c.sprite_get_animation)(Z(P), 15)) t = 0, r = (0, p.v2d_new)(1, 23);
                            else if (s == (0, c.sprite_get_animation)(Z(P), 16)) switch (t = 1, parseInt(e.actor.animation_frame, 10)) {
                            case 0:
                                r = (0, p.v2d_new)(6, 23);
                                break;
                            case 1:
                                r = (0, p.v2d_new)(5, 20);
                                break;
                            case 2:
                                r = (0, p.v2d_new)(0, 22)
                        } else if (s == (0, c.sprite_get_animation)(Z(P), 17)) switch (t = 3, parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    r = (0, p.v2d_new)(-1, 22);
                                    break;
                                case 1:
                                    r = (0, p.v2d_new)(-2, 20);
                                    break;
                                case 2:
                                    r = (0, p.v2d_new)(0, 21);
                                    break;
                                case 3:
                                    r = (0, p.v2d_new)(-1, 24);
                                    break;
                                case 4:
                                    r = (0, p.v2d_new)(0, 23);
                                    break;
                                case 5:
                                    r = (0, p.v2d_new)(0, 22)
                            } else if (s == (0, c.sprite_get_animation)(Z(P), 18)) t = 1, r = 0 == parseInt(e.actor.animation_frame, 10) ? (0, p.v2d_new)(6, 23) : (0, p.v2d_new)(5, 20);
                            else if (s == (0, c.sprite_get_animation)(Z(P), 19)) t = 1, r = (0, p.v2d_new)(8, 44);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 20)) t = 1, r = (0, p.v2d_new)(8, 39);
                        else if (s == (0, c.sprite_get_animation)(Z(P), 21)) switch (t = 4, parseInt(e.actor.animation_frame, 10)) {
                                case 0:
                                    r = (0, p.v2d_new)(-8, 41);
                                    break;
                                case 1:
                                    r = (0, p.v2d_new)(0, 43);
                                    break;
                                case 2:
                                    r = (0, p.v2d_new)(10, 41)
                            } else if (s == (0, c.sprite_get_animation)(Z(P), 22)) t = 3, r = (0, p.v2d_new)(0, 22);
                            else if (s == (0, c.sprite_get_animation)(Z(P), 23)) switch (parseInt(e.actor.animation_frame, 10)) {
                            case 0:
                                t = 3, r = (0, p.v2d_new)(7, 17);
                                break;
                            case 1:
                                t = 3, r = (0, p.v2d_new)(11, 15);
                                break;
                            case 2:
                                t = 0, r = (0, p.v2d_new)(12, 13)
                        } else s == (0, c.sprite_get_animation)(Z(P), 25) ? (t = 0, r = (0, p.v2d_new)(0, 23)) : a = !1
                }
                return r.x *= n ? -1 : 1, e.glasses = (0, o.actor_change_animation)(e.glasses, (0, c.sprite_get_animation)("SD_GLASSES", t)), e.glasses.position = (0, p.v2d_add)(_, (0, p.v2d_rotate)(r, -i)), e.glasses.angle = i, e.glasses.mirror = e.actor.mirror, e.glasses.visible = a && e.actor.visible, e
            }
        },
        te = function(e) {},
        ne = function(e) {
            var t = e.shield,
                n = e.actor,
                a = (0, p.v2d_new)(0, 0);
            switch (e.shield_type) {
                case A:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_SHIELD", 0));
                    break;
                case j:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_FIRESHIELD", 0));
                    break;
                case B:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_THUNDERSHIELD", 0));
                    break;
                case C:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_WATERSHIELD", 0));
                    break;
                case F:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_ACIDSHIELD", 0));
                    break;
                case H:
                    a = (0, p.v2d_new)(0, -22), t.position = (0, p.v2d_add)(n.position, (0, p.v2d_rotate)(a, -(0, g.old_school_angle)(n.angle))), t = (0, o.actor_change_animation)(t, (0, c.sprite_get_animation)("SD_WINDSHIELD", 0))
            }
        },
        oe = function(e) {
            return e.disable_wall !== E
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resourcemanager_add_music = t.resourcemanager_add_sample = t.resourcemanager_add_image = t.resourcemanager_init = t.resourcemanager_getJsonFile = t.resourcemanager_getJsonFiles = void 0;
    var o = n(4),
        a = n(26),
        i = {},
        r = {},
        _ = {},
        s = {},
        c = (t.resourcemanager_getJsonFiles = function(e) {
            return Promise.all(e.map(c))
        }, t.resourcemanager_getJsonFile = function(e) {
            return e = o.DATA_ROOT + e, new Promise(function(t, n) {
                if (s[e]) return void t(s[e]);
                var o = new XMLHttpRequest;
                o.overrideMimeType("application/json"), o.open("GET", e, !0), o.onreadystatechange = function() {
                    if (4 === o.readyState) {
                        var n = {};
                        try {
                            n = JSON.parse(o.responseText)
                        } catch (e) {}
                        s[e] = n, t(n)
                    }
                }, o.send(null)
            })
        });
    t.resourcemanager_init = function() {
        i = (0, a.hashtable_image_t_create)(), r = (0, a.hashtable_sound_t_create)(), _ = (0, a.hashtable_music_t_create)()
    }, t.resourcemanager_add_image = function(e, t) {
        (0, a.hashtable_image_t_add)(i, e, t)
    }, t.resourcemanager_add_sample = function(e, t) {
        (0, a.hashtable_sound_t_add)(r, e, t)
    }, t.resourcemanager_add_music = function(e, t) {
        (0, a.hashtable_music_t_add)(_, e, t)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.lang_get = t.lang_getstring = t.lang_loadfile = t.lang_release = t.lang_init = void 0;
    var o = n(8),
        a = n(17),
        i = "data/languages/english.json",
        r = {},
        _ = (t.lang_init = function(e, t) {
            (0, o.logfile_message)("Initializing the language module"), i = e ? e : i, _(i).then(function(e) {
                (0, o.logfile_message)("lang_init() ok!"), t()
            })
        }, t.lang_release = function() {}, t.lang_loadfile = function(e) {
            return new Promise(function(t, n) {
                (0, o.logfile_message)('lang_loadfile("%s")...', e), (0, a.resourcemanager_getJsonFile)(e).then(function(e) {
                    r = e, t(e)
                })
            })
        }),
        s = t.lang_getstring = function(e, t, n) {
            return r[e] || e
        };
    t.lang_get = function(e) {
        return s(e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.storyboard_get_scene = t.storyboard_release = t.storyboard_init = t.SCENE_STAGESELECT = t.SCENE_OPTIONS = t.SCENE_CREDITS = t.SCENE_LANGSELECT = t.SCENE_CONFIRMBOX = t.SCENE_QUESTOVER = t.SCENE_MENU = t.SCENE_ENDOFDEMO = t.SCENE_QUEST = t.SCENE_GAMEOVER = t.SCENE_PAUSE = t.SCENE_LEVEL = t.SCENE_INTRO = void 0;
    var o = n(28),
        a = n(73),
        i = n(75),
        r = n(76),
        _ = n(77),
        s = n(78),
        c = n(7),
        d = n(79),
        l = n(80),
        u = n(81),
        p = n(22),
        f = n(82),
        g = n(83),
        v = 256,
        m = t.SCENE_INTRO = 0,
        h = t.SCENE_LEVEL = 1,
        b = t.SCENE_PAUSE = 2,
        y = t.SCENE_GAMEOVER = 3,
        I = t.SCENE_QUEST = 4,
        E = t.SCENE_ENDOFDEMO = 5,
        x = t.SCENE_MENU = 6,
        w = t.SCENE_QUESTOVER = 7,
        S = t.SCENE_CONFIRMBOX = 8,
        O = t.SCENE_LANGSELECT = 9,
        L = t.SCENE_CREDITS = 10,
        k = t.SCENE_OPTIONS = 11,
        R = t.SCENE_STAGESELECT = 12,
        N = [],
        T = (t.storyboard_init = function() {
            for (var e = 0; e < v; e++) N[e] = null;
            N[h] = T(c.level_init, c.level_update, c.level_render, c.level_release), N[b] = T(u.pause_init, u.pause_update, u.pause_render, u.pause_release), N[y] = T(r.gameover_init, r.gameover_update, r.gameover_render, r.gameover_release), N[I] = T(p.quest_init, p.quest_update, p.quest_render, p.quest_release), N[x] = T(d.menu_init, d.menu_update, d.menu_render, d.menu_release), N[m] = T(_.intro_init, _.intro_update, _.intro_render, _.intro_release), N[E] = T(i.endofdemo_init, i.endofdemo_update, i.endofdemo_render, i.endofdemo_release), N[w] = T(f.questover_init, f.questover_update, f.questover_render, f.questover_release), N[S] = T(o.confirmbox_init, o.confirmbox_update, o.confirmbox_render, o.confirmbox_release), N[O] = T(s.langselect_init, s.langselect_update, s.langselect_render, s.langselect_release), N[L] = T(a.credits_init, a.credits_update, a.credits_render, a.credits_release), N[k] = T(l.options_init, l.options_update, l.options_render, l.options_release), N[R] = T(g.stageselect_init, g.stageselect_update, g.stageselect_render, g.stageselect_release)
        }, t.storyboard_release = function() {
            for (var e = 0; e < v; e++) N[e] && D(N[e])
        }, t.storyboard_get_scene = function(e) {
            return N[e]
        }, function(e, t, n, o) {
            return {
                init: e,
                update: t,
                render: n,
                release: o
            }
        }),
        D = function(e) {
            null
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.get_object_instance = function(e) {
        var t = e,
            n = t.decorated_machine;
        return n.get_object_instance(n)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.background_render_fg = t.background_render_bg = t.background_update = t.background_unload = t.background_load = void 0;
    var o = n(4),
        a = n(2),
        i = n(0),
        r = n(10),
        _ = n(8),
        s = n(3),
        c = n(17),
        d = n(9),
        l = n(1),
        u = (t.background_load = function(e) {
            return new Promise(function(t, n) {
                (0, _.logfile_message)("background_load('%s')", e), (0, c.resourcemanager_getJsonFile)(e).then(I).then(function(e) {
                    t(e)
                })
            })
        }, t.background_unload = function(e) {
            return (0, _.logfile_message)("background_unload()"), null
        }, t.background_update = function(e) {
            if (!e) return !1;
            var t = void 0,
                n = void 0;
            for (t = 0; t < e.length; t++) n = e[t], n.strategy && n.strategy.update && n.strategy.update(n.strategy)
        }, t.background_render_bg = function(e, t) {
            u(e, t, !1)
        }, t.background_render_fg = function(e, t) {
            u(e, t, !0)
        }, function(e, t, n) {
            if (e) {
                var o = void 0,
                    i = (0, a.v2d_new)(r.VIDEO_SCREEN_W / 2, r.VIDEO_SCREEN_H / 2),
                    _ = (0, a.v2d_subtract)(t, i),
                    s = void 0;
                for (o = 0; o < e.length; o++) s = e[o], (!n && s.zindex <= .5 || n && s.zindex > .5) && (s.actor.position.x += _.x * s.actor.speed.x, s.actor.position.y += _.y * s.actor.speed.y, (0, l.actor_render_repeat_xy)(s.actor, i, s.repeat_x, s.repeat_y), s.actor.position.y -= _.y * s.actor.speed.y, s.actor.position.x -= _.x * s.actor.speed.x)
            }
        }),
        p = function() {
            var e = {};
            return e.actor = (0, l.actor_create)(), e.data = null, e.strategy = null, e.repeat_x = !1, e.repeat_y = !1, e.zindex = 0, e
        },
        f = function(e) {
            return null, null
        },
        g = function(e) {},
        v = function(e) {
            var t = {},
                n = t;
            return n.background = e, n.update = g, n
        },
        m = function(e) {
            var t = e,
                n = e.background,
                o = (0, s.timer_get_delta)();
            n.actor.position.x += t.speed_x * o, n.actor.position.y += t.speed_y * o
        },
        h = function(e, t, n) {
            var o = {},
                a = o;
            return a.background = e, a.update = m, o.speed_x = t, o.speed_y = n, a
        },
        b = function(e) {
            var t = e,
                n = e.background,
                o = (0, s.timer_get_delta)(),
                a = void 0,
                i = void 0,
                r = void 0;
            a = t.timer += o, i = Math.sin(t.angularspeed_x * a + t.initialphase_x), r = Math.cos(t.angularspeed_y * a + t.initialphase_y), n.actor.position.x += -t.angularspeed_x * t.amplitude_x * i * o, n.actor.position.y += t.angularspeed_y * t.amplitude_y * r * o
        },
        y = function(e, t, n, a, i, r, _) {
            var s = {},
                c = s;
            return c.background = e, c.update = b, s.timer = 0, s.amplitude_x = t, s.amplitude_y = n, s.angularspeed_x = 2 * o.PI * a, s.angularspeed_y = 2 * o.PI * i, s.initialphase_x = r * o.PI / 180, s.initialphase_y = _ * o.PI / 180, c
        },
        I = function(e) {
            var t = e.bg;
            return Promise.all(t.map(E))
        },
        E = function(e, t) {
            return new Promise(function(t, n) {
                var o = p();
                o.actor.spawn_point.x = e.initial_position.xpos, o.actor.spawn_point.y = e.initial_position.ypos, o.actor.position = (0, a.v2d_new)(o.actor.spawn_point.x, o.actor.spawn_point.y), o.actor.speed.x = e.scroll_speed.xspeed, o.actor.speed.y = e.scroll_speed.yspeed;
                switch (e.behavior && (0, d.isArray)(e.behavior) ? e.behavior[0] : e.behavior) {
                    case "DEFAULT":
                        o.strategy && (o.strategy = f(o.strategy)), o.strategy = v(o);
                        break;
                    case "LINEAR":
                        o.strategy && (o.strategy = f(o.strategy)), o.strategy = h(o, e.behavior[1], e.behavior[2]);
                        break;
                    case "CIRCULAR":
                        o.strategy && (o.strategy = f(o.strategy)), o.strategy = y(o, e.behavior[1], e.behavior[2], e.behavior[3], e.behavior[4], e.behavior[5], e.behavior[6])
                }
                o.repeat_x = e.repeat_x, o.repeat_y = e.repeat_y, e.zindex && (o.zindex = e.zindex), (0, i.sprite_create)(e.sprite).then(function(e) {
                    o.data = e, o.actor.animation = e, o.actor.animation.data = [0], o.actor.image = o.actor.animation.frame_data[0], t(o)
                })
            })
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.quest_getvalue = t.quest_setvalue = t.quest_getname = t.quest_abort = t.quest_setlevel = t.quest_run = t.quest_release = t.quest_render = t.quest_update = t.quest_init = void 0;
    var o = n(7),
        a = n(14),
        i = n(29),
        r = n(9),
        _ = n(19),
        s = n(8),
        c = n(16),
        d = 3,
        l = void 0,
        u = void 0,
        p = void 0,
        f = void 0,
        g = {
            TOTALTIME: 0,
            BIGRINGS: 0,
            GLASSES: 0
        },
        v = "NO_QUEST_NAME",
        m = (t.quest_init = function() {
            var e = void 0;
            for (p = !1, e = 0; e < d; e++) g[e] = 0
        }, t.quest_update = function() {
            return 0 == l.level_count ? ((0, s.logfile_message)("Quest '%s' has no levels.", l.file), void game_quit()) : u < l.level_count && !p ? ((0, o.level_setfile)(l.level_path[u]), (0, a.scenestack_push)((0, _.storyboard_get_scene)(_.SCENE_LEVEL)), u++, void 0) : ((0, a.scenestack_pop)(), void(p ? (0, a.scenestack_push)((0, _.storyboard_get_scene)(_.SCENE_MENU)) : l.show_ending ? (0, a.scenestack_push)((0, _.storyboard_get_scene)(_.SCENE_ENDOFDEMO)) : (0, a.scenestack_push)((0, _.storyboard_get_scene)(_.SCENE_QUESTOVER))))
        }, t.quest_render = function() {}, t.quest_release = function() {
            (0, i.quest_unload)(l)
        }, t.quest_run = function(e, t) {
            void 0 === t && (t = !1), l = e, f = !t, (0, c.player_set_lives)(c.PLAYER_INITIAL_LIVES), (0, c.player_set_score)(0), (0, s.logfile_message)("Running quest %s, '%s'...", e.file, e.name), m(0)
        }, t.quest_setlevel = function(e) {
            u = Math.max(0, e)
        });
    t.quest_abort = function() {
        p = !0
    }, t.quest_getname = function() {
        return v
    }, t.quest_setvalue = function(e, t) {
        g[(0, r.clip)(parseInt(e, 10), 0, d - 1)] = t
    }, t.quest_getvalue = function(e) {
        return g[(0, r.clip)(parseInt(e, 10), 0, d - 1)]
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.brick_get_behavior_name = t.brick_get_property_name = t.brick_image = t.brick_animate = t.brick_size = t.brick_get = t.brick_unload = t.brick_load = t.BRB_FALL_TIME = t.BRICK_MAXVALUES = t.BRS_ACTIVE = t.BRS_DEAD = t.BRS_IDLE = t.BRB_FALL = t.BRB_BREAKABLE = t.BRB_CIRCULAR = t.BRB_DEFAULT = t.BRICKBEHAVIOR_MAXARGS = t.BRK_CLOUD = t.BRK_OBSTACLE = t.BRK_NONE = void 0;
    var o = n(0),
        a = n(17),
        i = n(3),
        r = n(8),
        _ = n(9),
        s = t.BRK_NONE = 0,
        c = t.BRK_OBSTACLE = 1,
        d = t.BRK_CLOUD = 2,
        l = t.BRICKBEHAVIOR_MAXARGS = 5,
        u = t.BRB_DEFAULT = 0,
        p = t.BRB_CIRCULAR = 1,
        f = t.BRB_BREAKABLE = 2,
        g = t.BRB_FALL = 3,
        v = (t.BRS_IDLE = 0, t.BRS_DEAD = 1, t.BRS_ACTIVE = 2, t.BRICK_MAXVALUES = 3, t.BRB_FALL_TIME = 1, 0),
        m = [],
        h = (t.brick_load = function(e) {
            return new Promise(function(t, n) {
                (0, r.logfile_message)("brickdata_load('%s')", e), (0, a.resourcemanager_getJsonFile)(e).then(y).then(function(e) {
                    m = e
                }).then(t)
            })
        }, t.brick_unload = function() {
            var e = void 0;
            for ((0, r.logfile_message)("brickdata_unload()"), e = 0; e < v; e++) m[e] = b(m[e]);
            v = 0, (0, r.logfile_message)("brickdata_unload() ok")
        }, t.brick_get = function(e) {
            return m[e]
        }, t.brick_size = function() {
            return v
        }, t.brick_animate = function(e) {
            var t = e.brick_ref.data;
            if (null != t && t.animation_data.length) {
                var n = (t.animation_data[0].repeat, t.animation_data[0].frame_count);
                e.animation_frame += t.animation_data[0].fps * (0, i.timer_get_delta)(), e.animation_frame > t.animation_data[0].frame_count - 1 && (e.animation_frame = 0), n = parseInt(e.animation_frame, 10), e.brick_ref.image = t.frame_data[t.animation_data[0].data[n]]
            }
            return e
        }, t.brick_image = function(e) {
            return e.brick_ref.image
        }, t.brick_get_property_name = function(e) {
            switch (e) {
                case s:
                    return "PASSABLE";
                case c:
                    return "OBSTACLE";
                case d:
                    return "CLOUD";
                default:
                    return "Unknown"
            }
        }, t.brick_get_behavior_name = function(e) {
            switch (e) {
                case u:
                    return "DEFAULT";
                case p:
                    return "CIRCULAR";
                case f:
                    return "BREAKABLE";
                case g:
                    return "FALL";
                default:
                    return "Unknown"
            }
        }, function() {
            var e = void 0,
                t = {};
            for (t.data = null, t.image = null, t.property = s, t.angle = 0, t.behavior = u, t.zindex = .5, t.behavior_arg = [], e = 0; e < l; e++) t.behavior_arg[e] = 0;
            return t
        }),
        b = function(e) {},
        y = function(e) {
            var t = e.bricks;
            return Promise.all(t.map(I))
        },
        I = function(e) {
            return new Promise(function(t, n) {
                var a = h(),
                    i = e.type;
                "OBSTACLE" == i ? a.property = c : "PASSABLE" == i ? a.property = s : "CLOUD" == i ? a.property = d : (0, r.logfile_message)("Can't read brick attributes: unknown brick type '%s'", i), i = (0, _.isArray)(e.behavior) ? e.behavior[0] : e.behavior, "DEFAULT" == i ? a.behavior = u : "CIRCULAR" == i ? a.behavior = p : "BREAKABLE" == i ? a.behavior = f : "FALL" == i ? a.behavior = g : (0, r.logfile_message)("Can't read brick attributes: unknown brick type '%s'", i);
                for (var m = 0; m < l; m++) a.behavior_arg[m] = e.behavior[1 + m];
                a.behavior_arg[a.behavior_arg.length - 1] = 0, a.angle = e.angle, e.zindex && (a.zindex = e.zindex), (0, o.sprite_create)(e.sprite).then(function(e) {
                    a.data = e, a.image = e.frame_data[0], v++, t(a)
                })
            })
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.enemy_observe_active_player = t.enemy_observe_current_player = t.enemy_observe_player = t.enemy_get_observed_player = t.enemy_remove_child = t.enemy_add_child = t.enemy_get_child = t.enemy_get_parent = t.enemy_render = t.enemy_update = t.enemy_destroy = t.enemy_create = t.enemy_get_list_of_names = t.enemy_release = t.enemy_objects_init = void 0;
    var o = n(8),
        a = n(0),
        i = n(13),
        r = n(17),
        _ = n(7),
        s = n(1),
        c = n(11),
        d = n(33),
        l = n(63),
        u = void 0,
        p = [],
        f = (t.enemy_objects_init = function() {
            (0, o.logfile_message)("Loading objects scripts..."), u = null, (0, r.resourcemanager_getJsonFile)("data/objects/enemies.json").then(function(e) {
                v(u, e), u = e
            })
        }, t.enemy_release = function() {}, t.enemy_get_list_of_names = function(e) {
            return p.length, p.name
        }, t.enemy_create = function(e) {
            return f(e)
        }, t.enemy_destroy = function(e) {}, t.enemy_update = function(e, t, n, o, a, i) {
            if (e) {
                var r = (0, d.object_vm_get_reference_to_current_state)(e.vm);
                r.update(r, t, n, o, a, i)
            }
        }, t.enemy_render = function(e, t) {
            if (e) {
                var n = (0, d.object_vm_get_reference_to_current_state)(e.vm);
                (!e.hide_unless_in_editor_mode || e.hide_unless_in_editor_mode && (0, _.level_editmode)()) && n.render(n, t)
            }
        }, t.enemy_get_parent = function(e) {
            return e.parent
        }, t.enemy_get_child = function(e, t) {
            return y(e.children, t)
        }, t.enemy_add_child = function(e, t, n) {
            e.children = h(e.children, t, n), n.parent = e, n.created_from_editor = !1
        }, t.enemy_remove_child = function(e, t) {
            e.children = b(e.children, t)
        }, t.enemy_get_observed_player = function(e) {
            return null != e.observed_player ? e.observed_player : (0, _.level_player)()
        }, t.enemy_observe_player = function(e, t) {
            e.observed_player = t
        }, t.enemy_observe_current_player = function(e) {
            e.observed_player = (0, _.level_player)()
        }, t.enemy_observe_active_player = function(e) {
            e.observed_player = null
        }, function(e) {
            var t = {},
                n = {};
            return t.name = e, t.state = c.IS_IDLE, t.actor = (0, s.actor_create)(), t.actor.input = (0, i.input_create_computer)(), t.actor = (0, s.actor_change_animation)(t.actor, (0, a.sprite_get_animation)("SD_QUESTIONMARK", 0)), t.preserve = !0, t.obstacle = !1, t.obstacle_angle = 0, t.always_active = !1, t.hide_unless_in_editor_mode = !1, t.vm = (0, d.object_vm_create)(t), t.created_from_editor = !0, t.parent = null, t.children = m(), t.observed_player = null, n.in_object_name = e, n.out_object_block = null, n.out_object_block = g(u, n), null != n.out_object_block ? t = (0, l.object_compiler_compile)(t, n.out_object_block) : (0, o.logfile_message)("Object '%s' does not exist", e), t
        }),
        g = function(e, t) {
            var n = e[t.in_object_name];
            if (n) {
                t.in_object_name;
                return n
            }
            return (0, o.logfile_message)("Object script error: unknown keyword '%s'", n), 0
        },
        v = function(e, t) {
            return e
        },
        m = function() {
            return null
        },
        h = function(e, t, n) {
            var o = {};
            return o.name = t, o.data = n, o.next = e, o
        },
        b = function(e, t) {
            var n = void 0,
                o = void 0;
            if (null != e) {
                if (e.data == t) return o = e.next, e.name = null, e = null, o;
                for (n = e; null != n.next && n.next.data != t;) n = n.next;
                return null != n.next && (o = n.next.next, n.next.name = null, n.next = null, n.next = o), e
            }
            return null
        },
        y = function(e, t) {
            for (var n = e; null != n;) {
                if (0 == strcmp(n.name, t)) return n.data;
                n = n.next
            }
            return null
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.preferences_set_language = t.preferences_set_show_fps = t.preferences_set_smooth_graphics = t.preferences_set_fullscreen = t.preferences_set_video_resolution = t.preferences_get_language = t.preferences_get_show_fps = t.preferences_get_smooth_graphics = t.preferences_get_fullscreen = t.preferences_get_video_resolution = t.preferences_init = void 0;
    var o = n(8),
        a = {
            video_resolution: null,
            fullscreen: null,
            smooth_graphics: null,
            show_fps: null,
            language: null
        },
        i = (t.preferences_init = function() {
            (0, o.logfile_message)("preferences_init()"), r()
        }, t.preferences_get_video_resolution = function() {
            return a.video_resolution
        }, t.preferences_get_fullscreen = function() {
            return a.fullscreen
        }, t.preferences_get_smooth_graphics = function() {
            return a.smooth_graphics
        }, t.preferences_get_show_fps = function() {
            return a.show_fps
        }, t.preferences_get_language = function() {
            return a.language
        }, t.preferences_set_video_resolution = function(e) {
            a.video_resolution = e, _()
        }, t.preferences_set_fullscreen = function(e) {
            a.fullscreen = e, _()
        }, t.preferences_set_smooth_graphics = function(e) {
            a.smooth_graphics = e, _()
        }, t.preferences_set_show_fps = function(e) {
            a.show_fps = e, _()
        }, t.preferences_set_language = function(e) {
            a.language = e, _()
        }, function() {
            a.video_resolution = "TINY", a.fullscreen = !1, a.smooth_graphics = !1, a.show_fps = !1, a.language = "data/languages/english.json"
        }),
        r = function() {
            if (i(), "undefined" != typeof window)
                for (var e in a) a[e] = window.localStorage.getItem(e) ? localStorage.getItem(e) : a[e], "false" == a[e] && (a[e] = !1)
        },
        _ = function() {
            if ("undefined" != typeof window)
                for (var e in a) window.localStorage.setItem(e, a[e])
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = {};
    t.hashtable_spriteinfo_t_create = function() {
        return o.sprites = {}, o.sprites
    }, t.hashtable_spriteinfo_t_add = function(e, t, n) {
        o.sprites[t] = n
    }, t.hashtable_spriteinfo_t_find = function(e, t) {
        return o.sprites[t]
    }, t.hashtable_sprites = function() {
        return o.sprites
    }, t.hashtable_image_t_create = function() {
        return o.images = {}, o.images
    }, t.hashtable_image_t_add = function(e, t, n) {
        e[t] = n
    }, t.hashtable_sound_t_create = function() {
        return o.samples = {}, o.samples
    }, t.hashtable_sound_t_add = function(e, t, n) {
        e[t] = n
    }, t.hashtable_sound_t_find = function(e, t) {
        return o.samples[t]
    }, t.hashtable_music_t_create = function() {
        return o.musics = {}, o.musics
    }, t.hashtable_music_t_add = function(e, t, n) {
        e[t] = n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.find_closest_item = void 0;
    var o = n(4),
        a = n(2);
    t.find_closest_item = function(e, t, n, i) {
        var r = o.INFINITY_FLT,
            _ = void 0,
            s = null,
            c = void 0;
        for (_ = t; _; _ = _.next) _.data && _.data.type == n && (c = (0, a.v2d_subtract)(_.data.actor.position, e.actor.position), (0, a.v2d_magnitude)(c) < r && (s = _.data, r = (0, a.v2d_magnitude)(c)));
        return i && (i.dist = r), s
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.confirmbox_selected_option = t.confirmbox_alert = t.confirmbox_release = t.confirmbox_render = t.confirmbox_update = t.confirmbox_init = void 0;
    var o = n(2),
        a = n(3),
        i = n(10),
        r = n(12),
        _ = n(0),
        s = n(13),
        c = n(5),
        d = n(14),
        l = n(6),
        u = n(1),
        p = n(15),
        f = -1,
        g = void 0,
        v = void 0,
        m = void 0,
        h = void 0,
        b = [],
        y = void 0,
        I = void 0,
        E = [],
        x = void 0,
        w = f,
        S = void 0,
        O = void 0,
        L = void 0;
    t.confirmbox_init = function() {
        var e = void 0;
        for (g = (0, _.sprite_get_image)((0, _.sprite_get_animation)("SD_CONFIRMBOX", 0), 0), m = (0, o.v2d_new)((i.VIDEO_SCREEN_W - g.width) / 2, i.VIDEO_SCREEN_H), L = (0, s.input_create_user)(), y = (0, u.actor_create)(), y = (0, u.actor_change_animation)(y, (0, _.sprite_get_animation)("SD_TITLEFOOT", 0)), h = (0, p.font_create)(8), (0, p.font_set_text)(h, I), (0, p.font_set_width)(h, 164), e = 0; e < x; e++) b[e] = [], b[e][0] = (0, p.font_create)(8), b[e][1] = (0, p.font_create)(8), (0, p.font_set_text)(b[e][0], E[e]), (0, p.font_set_text)(b[e][1], "<color=ffff00>%s</color>", E[e]);
        w = 0, S = !0, O = !1
    }, t.confirmbox_update = function() {
        var e = void 0,
            t = (0, a.timer_get_delta)(),
            n = 5 * i.VIDEO_SCREEN_H;
        if (S && (m.y <= (i.VIDEO_SCREEN_H - g.height) / 2 ? S = !1 : m.y -= n * t), O) {
            if (m.y >= i.VIDEO_SCREEN_H) return O = !1, void(0, d.scenestack_pop)();
            m.y += n * t
        }
        for (y.position = (0, o.v2d_new)(m.x + w * g.width / x + 10, m.y + .75 * g.height - 1), h.position = (0, o.v2d_new)(m.x + 10, m.y + 10), e = 0; e < x; e++) b[e][0].position = (0, o.v2d_new)(m.x + e * g.width / x + 25, m.y + .75 * g.height), b[e][1].position = b[e][0].position;
        S || O || ((0, s.input_button_pressed)(L, s.IB_LEFT) ? ((0, c.sound_play)((0, l.soundfactory_get)("choose")), w = ((w - 1) % x + x) % x) : (0, s.input_button_pressed)(L, s.IB_RIGHT) ? ((0, c.sound_play)((0, l.soundfactory_get)("choose")), w = (w + 1) % x) : ((0, s.input_button_pressed)(L, s.IB_FIRE1) || (0, s.input_button_pressed)(L, s.IB_FIRE3)) && ((0, c.sound_play)((0, l.soundfactory_get)("select")), O = !0))
    }, t.confirmbox_render = function() {
        var e = void 0,
            t = void 0,
            n = (0, o.v2d_new)(i.VIDEO_SCREEN_W / 2, i.VIDEO_SCREEN_H / 2);
        for ((0, i.video_clearDisplay)(), (0, i.video_get_backbuffer)().drawImage(g.data, g.sx, g.sy, g.swidth, g.sheight, m.x, m.y, g.swidth, g.sheight), (0, p.font_render)(h, n), e = 0; e < x; e++) t = e == w ? 1 : 0, (0, p.font_render)(b[e][t], n);
        (0, u.actor_render)(y, n)
    }, t.confirmbox_release = function() {
        (0, u.actor_destroy)(y), (0, s.input_destroy)(L), (0, p.font_destroy)(h), (0, r.image_destroy)(v)
    }, t.confirmbox_alert = function(e, t, n) {
        w = -1, I = e, E[0] = t, n ? (E[1] = n, x = 2) : x = 1
    }, t.confirmbox_selected_option = function() {
        if (w != f) {
            var e = w + 1;
            return w = f, e
        }
        return 0
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.quest_unload = t.quest_load = void 0;
    var o = n(4),
        a = n(12),
        i = n(8),
        r = n(17),
        _ = (t.quest_load = function(e) {
            return new Promise(function(t, n) {
                var o = {};
                (0, i.logfile_message)("load_quest('%s')", e), o.file = e, o.name = "", o.author = "", o.version = "", o.description = "", o.image = null, o.level_count = 0, o.show_ending = !1, (0, r.resourcemanager_getJsonFile)(e).then(s).then(function(e) {
                    e && (o = e), (0, i.logfile_message)("load_quest() ok!"), t(o)
                })
            })
        }, t.quest_unload = function(e) {
            return null
        }, function(e) {
            return new Promise(function(t, n) {
                var i = "data/images/null.png",
                    r = e ? e : i;
                r = o.DATA_ROOT + r, (0, a.image_load)(r).then(function(e) {
                    t(e)
                })
            })
        }),
        s = function(e) {
            return new Promise(function(t, n) {
                var o = {};
                o.name = e.name || "", o.author = e.author || "Open Sonic", o.version = e.version || "0", o.description = e.description || "", o.show_ending = e.show_ending || !1, o.level_count = e.levels ? e.levels.length : 0, o.level_path = e.levels || [], _(e.image).then(function(e) {
                    o.image = e, t(o)
                })
            })
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.camera_set_position = t.camera_get_position = t.camera_unlock = t.camera_lock = t.camera_move_to = t.camera_release = t.camera_update = t.camera_init = void 0;
    var o = n(4),
        a = n(2),
        i = n(3),
        r = n(10),
        _ = n(7),
        s = {
            is_locked: !1,
            position: {
                x: 0,
                y: 0
            },
            dest: {
                x: 0,
                y: 0
            },
            speed: 0,
            region_topleft: {
                x: 0,
                y: 0
            },
            region_bottomright: {
                x: 0,
                y: 0
            },
            dest_region_topleft: {
                x: 0,
                y: 0
            },
            dest_region_bottomright: {
                x: 0,
                y: 0
            },
            region_topleft_speed: 0,
            region_bottomright_speed: 0
        },
        c = (t.camera_init = function() {
            s.is_locked = !1, s.speed = 0, s.region_topleft_speed = 0, s.region_bottomright_speed = 0, s.position = s.dest = (0, a.v2d_new)(0, 0), s.region_topleft.x = s.dest_region_topleft.x = r.VIDEO_SCREEN_W / 2, s.region_topleft.y = s.dest_region_topleft.y = r.VIDEO_SCREEN_H / 2, s.region_bottomright.x = s.dest_region_bottomright.x = (0, _.level_size)().x - r.VIDEO_SCREEN_W / 2, s.region_bottomright.y = s.dest_region_bottomright.y = (0, _.level_size)().y - r.VIDEO_SCREEN_H / 2
        }, t.camera_update = function() {
            var e = 10,
                t = (0, i.timer_get_delta)(),
                n = void 0;
            d(), n = (0, a.v2d_subtract)(s.dest, s.position), (0, a.v2d_magnitude)(n) > e && (n = (0, a.v2d_normalize)(n), s.position.x += n.x * s.speed * t, s.position.y += n.y * s.speed * t), n = (0, a.v2d_subtract)(s.dest_region_topleft, s.region_topleft), (0, a.v2d_magnitude)(n) > e && (n = (0, a.v2d_normalize)(n), s.region_topleft.x += n.x * s.region_topleft_speed * t, s.region_topleft.y += n.y * s.region_topleft_speed * t), n = (0, a.v2d_subtract)(s.dest_region_bottomright, s.region_bottomright), (0, a.v2d_magnitude)(n) > e && (n = (0, a.v2d_normalize)(n), s.region_bottomright.x += n.x * s.region_bottomright_speed * t, s.region_bottomright.y += n.y * s.region_bottomright_speed * t)
        }, t.camera_release = function() {}, t.camera_move_to = function(e, t) {
            e.x < s.region_topleft.x && (e.x = s.region_topleft.x), e.y < s.region_topleft.y && (e.y = s.region_topleft.y), e.x > s.region_bottomright.x && (e.x = s.region_bottomright.x), e.y > s.region_bottomright.y && (e.y = s.region_bottomright.y), s.dest = e, t > o.EPSILON ? s.speed = (0, a.v2d_magnitude)((0, a.v2d_subtract)(s.position, s.dest)) / t : s.position = s.dest, s.position.x = parseInt(e.x, 10), s.position.y = parseInt(e.y, 10)
        }, t.camera_lock = function(e, t, n, o) {
            s.is_locked = !0, c(e, t, n, o)
        }, t.camera_unlock = function() {
            s.is_locked = !1
        }, t.camera_get_position = function() {
            return (0, a.v2d_new)(s.position.x, s.position.y)
        }, t.camera_set_position = function(e) {
            var t = (0, a.v2d_new)(e.x, e.y);
            s.dest = s.position = t
        }, function(e, t, n, o) {
            var i = .25;
            s.dest_region_topleft.x = Math.max(Math.min(e, n), r.VIDEO_SCREEN_W / 2), s.dest_region_topleft.y = Math.max(Math.min(t, o), r.VIDEO_SCREEN_H / 2), s.dest_region_bottomright.x = Math.min(Math.max(e, n), (0, _.level_size)().x - r.VIDEO_SCREEN_W / 2), s.dest_region_bottomright.y = Math.min(Math.max(t, o), (0, _.level_size)().y - r.VIDEO_SCREEN_H / 2), s.region_topleft_speed = (0, a.v2d_magnitude)((0, a.v2d_subtract)(s.region_topleft, s.dest_region_topleft)) / i, s.region_bottomright_speed = (0, a.v2d_magnitude)((0, a.v2d_subtract)(s.region_bottomright, s.dest_region_bottomright)) / i
        }),
        d = function() {
            s.is_locked || c(-o.INFINITY, -o.INFINITY, o.INFINITY, o.INFINITY)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.door_close = t.door_open = t.door_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(3),
        r = n(1),
        _ = n(0),
        s = (t.door_create = function() {
            var e = {};
            return e.init = s, e.release = l, e.update = c, e.render = d, e
        }, t.door_open = function(e) {
            e.is_closed = !1, (0, o.sound_play)((0, a.soundfactory_get)("open door"))
        }, t.door_close = function(e) {
            e.is_closed = !0, (0, o.sound_play)((0, a.soundfactory_get)("close door"))
        }, function(e) {
            var t = e;
            e.obstacle = !0, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, r.actor_create)(), t.is_closed = !0, (0, r.actor_change_animation)(e.actor, (0, _.sprite_get_animation)("SD_DOOR", 0))
        }),
        c = function(e, t, n, o, a, _) {
            var s = e,
                c = e.actor,
                d = 2e3,
                l = (0, i.timer_get_delta)();
            s.is_closed ? c.position.y = parseInt(Math.min(c.position.y + d * l, c.spawn_point.y), 10) : c.position.y = parseInt(Math.max(c.position.y - d * l, c.spawn_point.y - .8 * (0, r.actor_image)(c).height), 10)
        },
        d = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        l = function(e) {
            (0, r.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.teleporter_activate = t.teleporter_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(13),
        r = n(0),
        _ = n(3),
        s = n(2),
        c = n(1),
        d = n(16),
        l = n(7),
        u = (t.teleporter_create = function() {
            var e = {};
            return e.init = u, e.release = g, e.update = p, e.render = f, e
        }, t.teleporter_activate = function(e, t) {
            var n = e,
                r = e.actor;
            n.is_active || n.is_disabled || (n.is_active = !0, n.who = t, (0, i.input_ignore)(t.actor.input), (0, l.level_set_camera_focus)(r), (0, o.sound_play)((0, a.soundfactory_get)("teleporter")))
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, c.actor_create)(), t.is_disabled = !1, t.is_active = !1, t.timer = 0, (0, c.actor_change_animation)(e.actor, (0, r.sprite_get_animation)("SD_TELEPORTER", 0))
        }),
        p = function(e, t, n, o, a, d) {
            var u = e,
                p = e.actor,
                f = (0, _.timer_get_delta)(),
                g = void 0,
                m = 0;
            if (u.is_active) {
                if (u.timer += f, u.timer >= 3) {
                    var h = u.who;
                    for ((0, i.input_restore)(h.actor.input), (0, l.level_set_camera_focus)(h.actor), g = 0; g < n; g++) {
                        var b = t[g];
                        if (b != h) {
                            v(b, (0, s.v2d_add)(p.position, (0, s.v2d_new)(-20 + 40 * m++, -30)))
                        }
                    }
                    u.is_active = !1, u.is_disabled = !0
                }(0, c.actor_change_animation)(p, (0, r.sprite_get_animation)("SD_TELEPORTER", 1))
            } else(0, c.actor_change_animation)(p, (0, r.sprite_get_animation)("SD_TELEPORTER", 0))
        },
        f = function(e, t) {
            (0, c.actor_render)(e.actor, t)
        },
        g = function(e) {
            (0, c.actor_destroy)(e.actor)
        },
        v = function(e, t) {
            e && (e.actor.position = t, e.actor.speed = (0, s.v2d_new)(0, 0), e.actor.is_jumping = !1, e.flying = !1, e.climbing = !1, e.getting_hit = !1, e.spring = !1, e.actor.angle = 0, e.disable_wall = d.PLAYER_WALL_NONE, e.entering_loop = !1, e.at_loopfloortop = !1, e.bring_to_back = !1)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.object_vm_set_current_state = t.object_vm_create_state = t.object_vm_get_reference_to_current_state = t.object_vm_destroy = t.object_vm_create = void 0;
    var o = n(8),
        a = n(64),
        i = (t.object_vm_create = function(e) {
            var t = {};
            return t.owner = e, t.state_list = null, t.reference_to_current_state = null, t
        }, t.object_vm_destroy = function(e) {}, t.object_vm_get_reference_to_current_state = function(e) {
            return e.reference_to_current_state
        }, t.object_vm_create_state = function(e, t) {
            return null == r(e.state_list, t) && (e.state_list = i(e.state_list, t, e.owner)), e.state_list
        }, t.object_vm_set_current_state = function(e, t) {
            var n = r(e.state_list, t);
            return null != n ? e.reference_to_current_state = n.data : (0, o.logfile_message)('Object script error: can\'t find state "%s".', t), e
        }, function(e, t, n) {
            var o = {};
            return o.name = t, o.data = (0, a.objectbasicmachine_new)(n), o.next = e, o
        }),
        r = function e(t, n) {
            return null != t ? t.name ? t : e(t.next, n) : null
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.engine_init = void 0;
    var o = n(5),
        a = n(35),
        i = n(13),
        r = n(18),
        _ = n(25),
        s = n(17),
        c = n(14),
        d = n(37),
        l = n(6),
        u = n(0),
        p = n(19),
        f = n(3),
        g = n(9),
        v = n(10),
        m = n(7),
        h = n(16),
        b = n(24),
        y = n(15),
        I = (t.engine_init = function(e) {
            E();
            var t = (0, a.commandline_parse)(e);
            x(t), (0, u.sprite_init)().then(function() {
                (0, y.font_init)(), w(t, function() {
                    S(), O(t), I()
                })
            })
        }, function() {
            var e = void 0;
            (0, g.runAnimation)(function(t) {
                (0, f.timer_update)(t), (0, i.input_update)(), e = (0, c.scenestack_top)(), e && (e.update(), e == (0, c.scenestack_top)() && e.render()), (0, d.screenshot_update)(), (0, v.video_render)(), (0, i.input_render)()
            })
        }),
        E = function() {
            (0, _.preferences_init)()
        },
        x = function(e) {
            (0, f.timer_init)(), (0, v.video_init)(L(), e.video_resolution, e.smooth_graphics, e.fullscreen, e.color_depth, e.show_fps), (0, o.audio_init)(), (0, i.input_init)(), (0, s.resourcemanager_init)()
        },
        w = function(e, t) {
            (0, l.soundfactory_init)(), (0, b.enemy_objects_init)(), (0, p.storyboard_init)(), (0, d.screenshot_init)(), (0, r.lang_init)(e.language, function() {
                (0, c.scenestack_init)(), t()
            })
        },
        S = function() {
            (0, h.player_set_lives)(h.PLAYER_INITIAL_LIVES), (0, h.player_set_score)(0)
        },
        O = function(e) {
            e.custom_level ? ((0, m.level_setfile)(e.custom_level_path), (0, c.scenestack_push)((0, p.storyboard_get_scene)(p.SCENE_LEVEL))) : (0, c.scenestack_push)((0, p.storyboard_get_scene)(p.SCENE_INTRO))
        },
        L = function() {
            return ""
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.commandline_parse = void 0;
    var o = (n(8), n(25)),
        a = (t.commandline_parse = function(e) {
            var t = {};
            return t.video_resolution = (0, o.preferences_get_video_resolution)(), t.smooth_graphics = (0, o.preferences_get_smooth_graphics)(), t.fullscreen = (0, o.preferences_get_fullscreen)(), t.show_fps = (0, o.preferences_get_show_fps)(), t.language = (0, o.preferences_get_language)(), t.video_resolution = e.video_resolution ? e.video_resolution : t.video_resolution, t.smooth_graphics = e.smooth_graphics ? e.smooth_graphics : t.smooth_graphics, t.fullscreen = e.fullscreen ? e.fullscreen : t.fullscreen, t.show_fps = e.show_fps ? e.show_fps : t.show_fps, t.color_depth = e.color_depth ? e.color_depth : 32, t.level = e.level ? e.level : null, t.quest = e.quest ? e.quest : null, t.language = e.language ? e.language : t.language, t.video_resolution = a("video_resolution") ? a("video_resolution") : t.video_resolution, t.smooth_graphics = a("smooth_graphics") ? a("smooth_graphics") : t.smooth_graphics, t.fullscreen = a("fullscreen") ? a("fullscreen") : t.fullscreen, t.show_fps = a("show_fps") ? a("show_fps") : t.show_fps, t.color_depth = a("color_depth") ? a("color_depth") : t.color_depth, t.level = a("level") ? a("level") : t.level, t.quest = a("quest") ? a("quest") : t.quest, t.language = a("language") ? a("language") : t.language, t.level ? (t.custom_level = !0, t.custom_level_path = t.level) : t.custom_level = !1, t.quest ? (t.custom_quest = !0, t.custom_quest_path = t.quest) : t.custom_quest = !1, t
        }, function(e) {
            if ("undefined" != typeof window) {
                var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                return t && decodeURIComponent(t[1].replace(/\+/g, " "))
            }
            return null
        })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.osspec_isTouch = function() {
        try {
            return document.createEvent("TouchEvent"), !0
        } catch (e) {
            return !1
        }
    }, t.osspec_canGamepad = function() {
        return "undefined" != typeof navigator && "getGamepads" in navigator
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.screenshot_init = function() {}, t.screenshot_update = function() {}, t.screenshot_release = function() {}
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        i = n(10),
        r = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o(this, e), this._container = t.container || document.body, this._strokeStyle = t.strokeStyle || "cyan", this._mouseSupport = void 0 !== t.mouseSupport && t.mouseSupport, this._stationaryBase = t.stationaryBase || !1, this._baseX = this._stickX = t.baseX || 0, this._baseY = this._stickY = t.baseY || 0, this._limitStickTravel = t.limitStickTravel || !1, this._stickRadius = void 0 !== t.stickRadius ? t.stickRadius : 100, this._pressed = !1, this._touchIdx = null;
                var n = function(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                };
                this._$onTouchStart = n(this._onTouchStart, this), this._$onTouchEnd = n(this._onTouchEnd, this), this._$onTouchMove = n(this._onTouchMove, this), this._container.addEventListener("touchstart", this._$onTouchStart, !1), this._container.addEventListener("touchend", this._$onTouchEnd, !1), this._container.addEventListener("touchmove", this._$onTouchMove, !1), this._mouseSupport && (this._$onMouseDown = n(this._onMouseDown, this), this._$onMouseUp = n(this._onMouseUp, this), this._$onMouseMove = n(this._onMouseMove, this), this._container.addEventListener("mousedown", this._$onMouseDown, !1), this._container.addEventListener("mouseup", this._$onMouseUp, !1), this._container.addEventListener("mousemove", this._$onMouseMove, !1))
            }
            return a(e, [{
                key: "destroy",
                value: function() {
                    this._container.removeEventListener("touchstart", this._$onTouchStart, !1), this._container.removeEventListener("touchend", this._$onTouchEnd, !1), this._container.removeEventListener("touchmove", this._$onTouchMove, !1), this._mouseSupport && (this._container.removeEventListener("mouseup", this._$onMouseUp, !1), this._container.removeEventListener("mousedown", this._$onMouseDown, !1), this._container.removeEventListener("mousemove", this._$onMouseMove, !1))
                }
            }, {
                key: "deltaX",
                value: function() {
                    return this._stickX - this._baseX
                }
            }, {
                key: "deltaY",
                value: function() {
                    return this._stickY - this._baseY
                }
            }, {
                key: "up",
                value: function() {
                    if (this._pressed === !1) return !1;
                    var e = this.deltaX(),
                        t = this.deltaY();
                    return !(t >= 0) && !(Math.abs(e) > 2 * Math.abs(t))
                }
            }, {
                key: "down",
                value: function() {
                    if (this._pressed === !1) return !1;
                    var e = this.deltaX(),
                        t = this.deltaY();
                    return !(t <= 0) && !(Math.abs(e) > 2 * Math.abs(t))
                }
            }, {
                key: "right",
                value: function() {
                    if (this._pressed === !1) return !1;
                    var e = this.deltaX(),
                        t = this.deltaY();
                    return !(e <= 0) && !(Math.abs(t) > 2 * Math.abs(e))
                }
            }, {
                key: "left",
                value: function() {
                    if (this._pressed === !1) return !1;
                    var e = this.deltaX(),
                        t = this.deltaY();
                    return !(e >= 0) && !(Math.abs(t) > 2 * Math.abs(e))
                }
            }, {
                key: "_onUp",
                value: function() {
                    this._pressed = !1, 0 == this._stationaryBase && (this._baseX = this._baseY = 0, this._stickX = this._stickY = 0)
                }
            }, {
                key: "_onDown",
                value: function(e, t) {
                    this._pressed = !0;
                    var n = (0, i.video_getScale)();
                    e *= n.x, t *= n.y, this._stationaryBase, this._stickX = e, this._stickY = t
                }
            }, {
                key: "_onMove",
                value: function(e, t) {
                    var n = (0, i.video_getScale)();
                    e *= n.x, t *= n.y, this._pressed === !0 && (this._stickX = e, this._stickY = t)
                }
            }, {
                key: "_onMouseUp",
                value: function(e) {
                    return this._onUp()
                }
            }, {
                key: "_onMouseDown",
                value: function(e) {
                    e.preventDefault();
                    var t = e.clientX,
                        n = e.clientY;
                    return this._onDown(t, n)
                }
            }, {
                key: "_onMouseMove",
                value: function(e) {
                    var t = e.clientX,
                        n = e.clientY;
                    return this._onMove(t, n)
                }
            }, {
                key: "_onTouchStart",
                value: function(e) {
                    if (null === this._touchIdx) {
                        if (this.dispatchEvent("touchStartValidation", e) !== !1) {
                            this.dispatchEvent("touchStart", e), e.preventDefault();
                            var t = e.changedTouches[0];
                            this._touchIdx = t.identifier;
                            var n = t.pageX,
                                o = t.pageY;
                            return this._onDown(n, o)
                        }
                    }
                }
            }, {
                key: "_onTouchEnd",
                value: function(e) {
                    if (null !== this._touchIdx) {
                        this.dispatchEvent("touchEnd", e);
                        for (var t = e.changedTouches, n = 0; n < t.length && t[n].identifier !== this._touchIdx; n++);
                        if (n !== t.length) return this._touchIdx = null, e.preventDefault(), this._onUp()
                    }
                }
            }, {
                key: "_onTouchMove",
                value: function(e) {
                    if (null !== this._touchIdx) {
                        for (var t = e.changedTouches, n = 0; n < t.length && t[n].identifier !== this._touchIdx; n++);
                        if (n !== t.length) {
                            var o = t[n];
                            e.preventDefault();
                            var a = o.pageX,
                                i = o.pageY;
                            return this._onMove(a, i)
                        }
                    }
                }
            }, {
                key: "render",
                value: function(e) {
                    e.beginPath(), e.strokeStyle = this._strokeStyle, e.lineWidth = 3, e.arc(this._baseX, this._baseY, 20, 0, 2 * Math.PI, !0), e.stroke(), e.beginPath(), e.strokeStyle = this._strokeStyle, e.lineWidth = 1, e.arc(this._baseX, this._baseY, 30, 0, 2 * Math.PI, !0), e.stroke(), this._pressed && (e.beginPath(), e.strokeStyle = this._strokeStyle, e.lineWidth = 3, e.arc(this._stickX, this._stickY, 20, 0, 2 * Math.PI, !0), e.stroke())
                }
            }], [{
                key: "touchScreenAvailable",
                value: function() {
                    return "createTouch" in document
                }
            }]), e
        }();
    t.default = r,
        function(e) {
            e.addEventListener = function(e, t) {
                return void 0 === this._events && (this._events = {}), this._events[e] = this._events[e] || [], this._events[e].push(t), t
            }, e.removeEventListener = function(e, t) {
                void 0 === this._events && (this._events = {}), e in this._events != !1 && this._events[e].splice(this._events[e].indexOf(t), 1)
            }, e.dispatchEvent = function(e) {
                if (void 0 === this._events && (this._events = {}), void 0 !== this._events[e])
                    for (var t = this._events[e].slice(), n = 0; n < t.length; n++) {
                        var o = t[n].apply(this, Array.prototype.slice.call(arguments, 1));
                        if (void 0 !== o) return o
                    }
            }
        }(r.prototype)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.boss_defeated = t.boss_render = t.boss_update = t.boss_destroy = t.boss_create = void 0;
    var o = n(9),
        a = n(4),
        i = n(2),
        r = n(3),
        _ = n(13),
        s = n(0),
        c = n(10),
        d = n(5),
        l = n(6),
        u = n(11),
        p = n(1),
        f = n(7),
        g = 0,
        v = 1,
        m = 2,
        h = 3,
        b = 0,
        y = 1,
        I = 2,
        E = 1,
        x = 3,
        w = 10,
        S = (t.boss_create = function(e, t, n, o, a, r) {
            var c = void 0,
                d = void 0,
                l = {};
            for (l.type = e, l.state = b, l.rect_x = n, l.rect_y = o, l.rect_w = a, l.rect_h = r, l.value = [], c = 0; c < w; c++) l.value[c] = 0;
            switch (l.bring_to_front = !1, l.actor = d = (0, p.actor_create)(), d.spawn_point = (0, i.v2d_new)(t.x, t.y), d.position = (0, i.v2d_new)(t.x, t.y), d.input = (0, _.input_create_computer)(), e) {
                case g:
                case m:
                    (0, p.actor_change_animation)(d, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 0)), l.initial_hp = l.hp = 3, l.direction = x, d.maxspeed = 100, d.acceleration = 100;
                    break;
                case v:
                case h:
                    (0, p.actor_change_animation)(d, (0, s.sprite_get_animation)("SD_MECHASHADOW", 0)), l.initial_hp = l.hp = 10, l.direction = x, d.maxspeed = 100, d.acceleration = 100
            }
            return l
        }, t.boss_destroy = function(e) {
            (0, p.actor_destroy)(e.actor)
        }, t.boss_update = function(e, t, n) {
            var o = e.actor,
                a = null,
                i = null,
                r = null,
                _ = null,
                s = null,
                c = null,
                d = null,
                l = null,
                u = [],
                b = 2,
                I = -2,
                E = (0, p.actor_corners)(o, b, I, n, a, i, r, _, s, c, d, l);
            a = E.up, i = E.upright, r = E.right, _ = E.downright, s = E.down, c = E.downleft, d = E.left, l = E.upleft;
            var x = (0, p.actor_handle_clouds)(o, I, a, i, r, _, s, c, d, l);
            if (a = x.up, i = x.upright, r = x.right, _ = x.downright, s = x.down, c = x.downleft, d = x.left, l = x.upleft, u[0] = a, u[1] = i, u[2] = r, u[3] = _, u[4] = s, u[5] = c, u[6] = d, u[7] = l, (0, f.level_boss_battle)()) switch (e.hp <= 0 && e.state != y && ((0, f.level_kill_all_baddies)(), e.state = y), e.type) {
                case g:
                    L(e, t, n, u);
                    break;
                case v:
                    k(e, t, n, u);
                    break;
                case m:
                    R(e, t, n, u);
                    break;
                case h:
                    N(e, t, n, u)
            }
        }, t.boss_render = function(e, t) {
            O(e, t, !0), (0, p.actor_render)(e.actor, t), O(e, t, !1)
        }, t.boss_defeated = function(e) {
            return e.state == y
        }, function(e, t) {
            var n = void 0;
            for (n = 0; n < t.length && e.state != y; n++)
                if (t[n] && (0, p.actor_pixelperfect_collision)(e.actor, t[n].actor)) return !(!t[n].attacking(t[n]) && !t[n].invincible) || (t[n].hit(t[n]), !1);
            return !1
        }),
        O = function(e, t, n) {
            var o = e.actor,
                _ = .001 * (0, r.timer_get_ticks)();
            switch (e.type) {
                case h:
                    var c = void 0,
                        d = 5,
                        l = (0, i.v2d_new)(0, 0);
                    (0, s.sprite_get_image)((0, s.sprite_get_animation)("SD_INVSTAR", 0), 1);
                    if (e.state != y)
                        for (c = 0; c < d; c++) l.x = o.position.x + 20 * Math.cos(2 * a.PI * _ + 2 * c * a.PI / d), l.y = o.position.y + 20 * Math.sin(a.PI * _ + 2 * c * a.PI / d)
            }
        },
        L = function(e, t, n, g) {
            var v = (0, f.level_player)(),
                m = .001 * (0, r.timer_get_ticks)(),
                h = e.actor,
                b = e.value[0],
                I = e.value[1];
            if (e.state == y) {
                if (e.bring_to_front = !0, (0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 2)), h.position.y += 100 * (0, r.timer_get_delta)(), m >= I + .15) {
                    var w = (0, i.v2d_new)(h.position.x - h.hot_spot.x + (0, o.random)((0, p.actor_image)(h).width), h.position.y - h.hot_spot.y + (0, o.random)((0, p.actor_image)(h).height));
                    (0, f.level_create_item)(u.IT_EXPLOSION, w), h.position.y <= h.spawn_point.y + 1.5 * c.VIDEO_SCREEN_H && (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), I = m
                }
            } else {
                if (h.maxspeed = 200 - 100 / e.initial_hp * e.hp, h.acceleration = h.maxspeed, h.position.x < h.spawn_point.x - 200 && (e.direction = E), h.position.x > h.spawn_point.x && (e.direction = x), e.direction == E ? (0, _.input_simulate_button_down)(h.input, _.IB_RIGHT) : e.direction == x && (0, _.input_simulate_button_down)(h.input, _.IB_LEFT), h.position.y = h.spawn_point.y + 20 * Math.cos(a.PI * m), h.mirror = e.direction == E ? a.IF_NONE : a.IF_HFLIP, (0, p.actor_move)(h, (0, p.actor_eightdirections_movement)(h)), m >= b + 2 / e.initial_hp * e.hp) {
                    var O = [0, 3];
                    (0, f.level_create_enemy)(O[parseInt((0, o.random)(2), 10)], h.position).actor.speed.y = -150 - (0, o.random)(50), b = m
                }
                S(e, t) && h.animation == (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 0) && ((0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 1)), (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), v.actor.speed.x *= -1, v.actor.speed.y = 100, e.hp--), (0, p.actor_animation_finished)(h) && (0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 0)), e.value[0] = b, e.value[1] = I
            }
        },
        k = function(e, t, n, _) {
            var g = (0, f.level_player)(),
                v = e.actor,
                m = .001 * (0, r.timer_get_ticks)(),
                h = (0, r.timer_get_delta)(),
                w = void 0,
                O = e.value[0],
                L = e.value[1],
                k = e.value[2];
            switch (e.state) {
                case b:
                    if (e.direction = g.actor.position.x < v.position.x ? x : E, v.position.y = v.spawn_point.y + 30 * Math.cos(a.PI * m), (0, p.actor_animation_finished)(v) && actor.change_animation(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 0)), m >= O + 5) {
                        var R = (0, i.v2d_new)(g.actor.position.x - v.position.x, g.actor.position.y - v.position.y),
                            N = void 0;
                        R = (0, i.v2d_multiply)((0, i.v2d_normalize)(R), 200), N = (0, f.level_create_item)(u.IT_DANGPOWER, v.position), N.dangerouspower_set_speed(N, R), (0, d.sound_play)((0, l.soundfactory_get)("big shot")), O = m
                    }
                    if (m >= L + 15) {
                        var T = e.rect_x + e.rect_w / 2;
                        e.direction = v.position.x > T ? x : E, (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 2)), e.state = I, L = m
                    }
                    break;
                case I:
                    var D = 100,
                        P = e.rect_x + D,
                        M = e.rect_x + e.rect_w - D,
                        A = M - P + (v.position.x - P),
                        j = e.direction == x ? -1 : 1;
                    v.position.x += j * 200 * h, v.position.y = v.spawn_point.y - 100 * Math.sin(a.PI / (M - P) * A), (0, p.actor_animation_finished)(v) && (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 2)), (j == -1 && v.position.x <= P || 1 == j && v.position.x >= M) && ((0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 0)), e.state = b);
                    break;
                case y:
                    if (e.bring_to_front = !0, (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 4)), v.position.y += 100 * (0, r.timer_get_delta)(), m >= k + .15) {
                        var B = (0, i.v2d_new)(v.position.x - v.hot_spot.x + (0, o.random)((0, p.actor_image)(v).width), v.position.y - v.hot_spot.y + (0, o.random)((0, p.actor_image)(v).height));
                        (0, f.level_create_item)(u.IT_EXPLOSION, B), v.position.y <= v.spawn_point.y + 1.5 * c.VIDEO_SCREEN_H && (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), k = m
                    }
            }
            w = v.animation == (0, s.sprite_get_animation)("SD_MECHASHADOW", 1) || v.animation == (0, s.sprite_get_animation)("SD_MECHASHADOW", 3), S(e, t) && !w && e.state != y && (v.animation = (0, s.sprite_get_animation)("SD_MECHASHADOW", e.state == I ? 3 : 1), (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), e.hp--, g.actor.speed.x *= -.5, g.actor.speed.y = g.actor.jump_strength), v.mirror = e.direction == E ? a.IF_NONE : a.IF_HFLIP
        },
        R = function(e, t, n, g) {
            var v = (0, f.level_player)(),
                m = .001 * (0, r.timer_get_ticks)(),
                h = e.actor,
                b = e.value[0],
                I = e.value[1],
                w = e.value[2];
            if (e.state == y) {
                if (e.bring_to_front = !0, (0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 2)), h.position.y += 100 * (0, r.timer_get_delta)(), m >= I + .15) {
                    var O = (0, i.v2d_new)(h.position.x - h.hot_spot.x + (0, o.random)((0, p.actor_image)(h).width), h.position.y - h.hot_spot.y + (0, o.random)((0, p.actor_image)(h).height));
                    (0, f.level_create_item)(u.IT_EXPLOSION, O), h.position.y <= h.spawn_point.y + 1.5 * c.VIDEO_SCREEN_H && (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), I = m
                }
            } else {
                if (h.maxspeed = 200 - 100 / e.initial_hp * e.hp, h.acceleration = h.maxspeed, h.position.x < h.spawn_point.x - 200 && (e.direction = E), h.position.x > h.spawn_point.x && (e.direction = x), e.direction == E ? (0, _.input_simulate_button_down)(h.input, _.IB_RIGHT) : e.direction == x && (0, _.input_simulate_button_down)(h.input, _.IB_LEFT), h.position.y = h.spawn_point.y + 20 * Math.cos(a.PI * m), h.mirror = e.direction == E ? a.IF_NONE : a.IF_HFLIP, (0, p.actor_move)(h, (0, p.actor_eightdirections_movement)(h)), m >= b + 2 / e.initial_hp * e.hp) {
                    var L = ["9", "6"];
                    (0, f.level_create_enemy)(L[parseInt((0, o.random)(2), 10)], h.position).actor.speed.y = -150 - (0, o.random)(50), b = m
                }
                if (m >= w + 3 / e.initial_hp * e.hp) {
                    (0, f.level_create_item)(u.IT_FIREBALL, h.position).actor.speed.y = 100, (0, d.sound_play)((0, l.soundfactory_get)("fire")), w = m
                }
                S(e, t) && h.animation == (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 0) && ((0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 1)), (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), v.actor.speed.x *= -1, v.actor.speed.y = 100, e.hp--), (0, p.actor_animation_finished)(h) && (0, p.actor_change_animation)(h, (0, s.sprite_get_animation)("SD_SIMPLEBOSS", 0)), e.value[0] = b, e.value[1] = I, e.value[2] = w
            }
        },
        N = function(e, t, n, _) {
            var g = (0, f.level_player)(),
                v = e.actor,
                m = .001 * (0, r.timer_get_ticks)(),
                h = (0, r.timer_get_delta)(),
                w = void 0,
                O = e.value[0],
                L = e.value[1],
                k = e.value[2],
                R = e.value[3];
            switch (e.state) {
                case b:
                    if (e.direction = g.actor.position.x < v.position.x ? x : E, v.position.y = v.spawn_point.y + 30 * Math.cos(a.PI * m), (0, p.actor_animation_finished)(v) && (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 0)), m >= O + 4) {
                        var N = (0, i.v2d_new)(g.actor.position.x - v.position.x, g.actor.position.y - v.position.y),
                            T = void 0;
                        N = (0, i.v2d_multiply)((0, i.v2d_normalize)(N), 200), T = (0, f.level_create_item)(u.IT_DANGPOWER, v.position), T.dangerouspower_set_speed(T, N), (0, d.sound_play)((0, l.soundfactory_get)("big shot")), O = m
                    }
                    if (m >= L + 8) {
                        var D = e.rect_x + e.rect_w / 2;
                        e.direction = v.position.x > D ? x : E, (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 2)), e.state = I, L = m
                    }
                    break;
                case I:
                    var P = 100,
                        M = e.rect_x + P,
                        A = e.rect_x + e.rect_w - P,
                        j = A - M + (v.position.x - M),
                        B = e.direction == x ? -1 : 1;
                    if (v.position.x += B * 200 * h, v.position.y = v.spawn_point.y - 100 * Math.sin(a.PI / (A - M) * j), m >= R + .2) {
                        (0, f.level_create_item)(u.IT_FIREBALL, v.position).actor.speed.y = -200, (0, d.sound_play)((0, l.soundfactory_get)("fire")), R = m
                    }(0, p.actor_animation_finished)(v) && (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 2)), (B == -1 && v.position.x <= M || 1 == B && v.position.x >= A) && ((0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 0)), e.state = b);
                    break;
                case y:
                    if (e.bring_to_front = !0, (0, p.actor_change_animation)(v, (0, s.sprite_get_animation)("SD_MECHASHADOW", 4)), v.position.y += 100 * (0, r.timer_get_delta)(), m >= k + .15) {
                        var C = (0, i.v2d_new)(v.position.x - v.hot_spot.x + (0, o.random)((0, p.actor_image)(v).width), v.position.y - v.hot_spot.y + (0, o.random)((0, p.actor_image)(v).height));
                        (0, f.level_create_item)(u.IT_EXPLOSION, C), v.position.y <= v.spawn_point.y + 1.5 * c.VIDEO_SCREEN_H && (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), k = m
                    }
            }
            w = v.animation == (0, s.sprite_get_animation)("SD_MECHASHADOW", 1) || v.animation == (0, s.sprite_get_animation)("SD_MECHASHADOW", 3), S(e, t) && !w && e.state != y && (v.animation = (0, s.sprite_get_animation)("SD_MECHASHADOW", e.state == I ? 3 : 1), (0, d.sound_play)((0, l.soundfactory_get)("boss hit")), e.hp--, g.actor.speed.x *= -.5, g.actor.speed.y = g.actor.jump_strength), v.mirror = e.direction == E ? a.IF_NONE : a.IF_HFLIP, e.value[0] = O, e.value[1] = L, e.value[2] = k, e.value[3] = R
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.animal_create = void 0;
    var o = n(1),
        a = n(0),
        i = n(9),
        r = n(13),
        _ = n(4),
        s = n(11),
        c = n(7),
        d = 12,
        l = (t.animal_create = function() {
            var e = {};
            return e.init = l, e.release = u, e.update = p, e.render = f, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, o.actor_create)(), e.actor.maxspeed = 145 + (0, i.random)(21), e.actor.input = (0, r.input_create_computer)(), t.is_running = !1, t.animal_id = (0, i.random)(d), (0, o.actor_change_animation)(e.actor, (0, a.sprite_get_animation)("SD_ANIMAL", 0))
        }),
        u = function(e) {
            (0, o.actor_destroy)(e.actor)
        },
        p = function(e, t, n, d, l, u) {
            var p = e,
                f = e.actor,
                g = void 0,
                v = void 0,
                m = void 0,
                h = void 0,
                b = 2,
                y = -2,
                I = 2 * p.animal_id + (p.is_running ? 1 : 0);
            (0, r.input_simulate_button_down)(f.input, r.IB_FIRE1), f.jump_strength = 1.3 * (200 + (0, i.random)(50)), f.speed.x > _.EPSILON ? (f.speed.x = f.maxspeed, f.mirror = _.IF_NONE) : f.speed.x < -_.EPSILON && (f.speed.x = -f.maxspeed, f.mirror = _.IF_HFLIP), (0, o.actor_change_animation)(f, (0, a.sprite_get_animation)("SD_ANIMAL", I));
            var E = (0, o.actor_corners)(f, b, y, d, g, null, h, null, v, null, m, null);
            g = E.up, E.upright, h = E.right, E.downright, v = E.down, E.downleft, m = E.left, E.upleft;
            var x = (0, o.actor_handle_clouds)(f, y, g, null, h, null, v, null, m, null);
            g = x.up, x.upright, h = x.right, x.downright, v = x.down, x.downleft, m = x.left, x.upleft, v && !p.is_running && (p.is_running = !0, f.speed.x = ((0, i.random)(2) ? -1 : 1) * f.maxspeed), m && !g && (f.speed.x = f.maxspeed), h && !g && (f.speed.x = -f.maxspeed), !p.is_running && (v && g || m && h) && (e.state = s.IS_DEAD), (0, o.actor_move)(f, (0, o.actor_platform_movement)(f, d, (0, c.level_gravity)()))
        },
        f = function(e, t) {
            (0, o.actor_render)(e.actor, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.animalprison_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(1),
        r = n(0),
        _ = n(3),
        s = n(9),
        c = n(2),
        d = n(11),
        l = n(7),
        u = (t.animalprison_create = function() {
            var e = {},
                t = e;
            return e.init = u, e.release = p, e.update = f, e.render = g, t.state = null, e
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, i.actor_create)(), v(e, m()), (0, i.actor_change_animation)(e.actor, (0, r.sprite_get_animation)("SD_ENDLEVEL", 0))
        }),
        p = function(e) {
            (0, i.actor_destroy)(e.actor), v(e, null)
        },
        f = function(e, t, n, o, a, i) {
            var r = e;
            r.state.handle(r.state, e, t, n)
        },
        g = function(e, t) {
            (0, i.actor_render)(e.actor, t)
        },
        v = function(e, t) {
            e.state = t
        },
        m = function() {
            var e = {},
                t = e;
            return e.handle = I, t.being_hit = !1, t.hit_count = 0, e
        },
        h = function() {
            var e = {},
                t = e;
            return e.handle = E, t.explode_timer = 0, t.break_timer = 0, e
        },
        b = function() {
            var e = {};
            return e.handle = x, e
        },
        y = function() {
            var e = {};
            return e.handle = w, e
        },
        I = function(e, t, n, _) {
            var s = void 0,
                c = e,
                d = t.actor;
            for (s = 0; s < _; s++) {
                var l = n[s];
                S(t, l) && !c.being_hit && (c.being_hit = !0, (0, i.actor_change_animation)(d, (0, r.sprite_get_animation)("SD_ENDLEVEL", 1)), (0, o.sound_play)((0, a.soundfactory_get)("boss hit")), l.bounce(l), l.actor.speed.x *= -.5, ++c.hit_count >= 3 && v(t, h()))
            }(0, i.actor_animation_finished)(d) && c.being_hit && ((0, i.actor_change_animation)(d, (0, r.sprite_get_animation)("SD_ENDLEVEL", 0)), c.being_hit = !1)
        },
        E = function(e, t, n, r) {
            var u = e,
                p = t.actor,
                f = (0, _.timer_get_delta)();
            if (u.explode_timer += f, u.break_timer += f, u.explode_timer >= .1) {
                var g = (0, c.v2d_new)(p.position.x - p.hot_spot.x + (0, s.random)((0, i.actor_image)(p).width), p.position.y - p.hot_spot.y + (0, s.random)((0, i.actor_image)(p).height / 2));
                (0, l.level_create_item)(d.IT_EXPLOSION, g), (0, o.sound_play)((0, a.soundfactory_get)("explode")), u.explode_timer = 0
            }
            u.break_timer >= 2 && v(t, b())
        },
        x = function(e, t, n, o) {
            for (var a = t.actor, _ = 0; _ < 20; _++) {
                var d = (0, c.v2d_new)(a.position.x - a.hot_spot.x + (0, s.random)((0, i.actor_image)(a).width), a.position.y - a.hot_spot.y + (0, s.random)((0, i.actor_image)(a).height / 2));
                (0, l.level_create_animal)(d)
            }(0, l.level_clear)(a), (0, i.actor_change_animation)(a, (0, r.sprite_get_animation)("SD_ENDLEVEL", 2)), v(t, y())
        },
        w = function(e, t, n, o) {},
        S = function(e, t) {
            if (e && t) {
                var n = [],
                    o = [],
                    a = e.actor,
                    r = t.actor;
                return n[0] = r.position.x - r.hot_spot.x, n[1] = r.position.y - r.hot_spot.y, n[2] = n[0] + (0, i.actor_image)(r).width, n[3] = n[1] + (0, i.actor_image)(r).height, o[0] = a.position.x - a.hot_spot.x + 5, o[1] = a.position.y - a.hot_spot.y, o[2] = o[0] + (0, i.actor_image)(a).width - 10, o[3] = o[1] + (0, i.actor_image)(a).height / 2, t.attacking(t) && (0, s.bounding_box)(n, o) && (0, i.actor_pixelperfect_collision)(a, r)
            }
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bigring_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(0),
        r = n(1),
        _ = n(11),
        s = n(16),
        c = n(7),
        d = n(22),
        l = (t.bigring_create = function() {
            var e = {};
            return e.init = l, e.release = u, e.update = p, e.render = f, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, r.actor_create)(), t.is_disappearing = !1, (0, r.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_BLUERING", 0))
        }),
        u = function(e) {
            (0, r.actor_destroy)(e.actor)
        },
        p = function(e, t, n, i, l, u) {
            var p = void 0;
            for (p = 0; p < n; p++) {
                var f = t[p];
                f && !f.dying && (0, r.actor_collision)(f.actor, e.actor) && (e.state = _.IS_DEAD, (0, s.player_set_rings)((0, s.player_get_rings)() + 50), (0, c.level_add_to_secret_bonus)(5e3), (0, o.sound_play)((0, a.soundfactory_get)("big ring")), (0, c.level_call_dialogbox)("$BONUSMSG_TITLE", "$BONUSMSG_TEXT"), (0, d.quest_setvalue)(d.QUESTVALUE_BIGRINGS, (0, d.quest_getvalue)(d.QUESTVALUE_BIGRINGS) + 1))
            }
        },
        f = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bluering_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(0),
        r = n(1),
        _ = n(11),
        s = n(16),
        c = n(7),
        d = (t.bluering_create = function() {
            var e = {};
            return e.init = d, e.release = p, e.update = l, e.render = u, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, r.actor_create)(), t.is_disappearing = !1, (0, r.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_BLUERING", 0))
        }),
        l = function(e, t, n, d, l, u) {
            var p = (0, c.level_player)(),
                f = e,
                g = e.actor;
            g.visible = p.got_glasses || (0, c.level_editmode)(), f.is_disappearing ? (0, r.actor_animation_finished)(g) && (e.state = _.IS_DEAD) : !p.dying && p.got_glasses && (0, r.actor_collision)(g, p.actor) && ((0, r.actor_change_animation)(g, (0, i.sprite_get_animation)("SD_BLUERING", 1)), (0, s.player_set_rings)((0, s.player_get_rings)() + 5), (0, o.sound_play)((0, a.soundfactory_get)("blue ring")), f.is_disappearing = !0)
        },
        u = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        p = function(e) {
            (0, r.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bumper_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(1),
        r = n(0),
        _ = n(2),
        s = (t.bumper_create = function() {
            var e = {};
            return e.init = s, e.release = l, e.update = c, e.render = d, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, i.actor_create)(), t.getting_hit = !1, (0, i.actor_change_animation)(e.actor, (0, r.sprite_get_animation)("SD_BUMPER", 0))
        }),
        c = function(e, t, n, _, s, c) {
            var d = e,
                l = e.actor,
                p = void 0;
            for (p = 0; p < n; p++) {
                var f = t[p];
                f && !f.dying && (0, i.actor_pixelperfect_collision)(f.actor, l) && (d.getting_hit || (d.getting_hit = !0, (0, i.actor_change_animation)(l, (0, r.sprite_get_animation)("SD_BUMPER", 1)), (0, o.sound_play)((0, a.soundfactory_get)("bumper")), u(e, f)))
            }
            d.getting_hit && actor_animation_finished(l) && (d.getting_hit = !1, (0, i.actor_change_animation)(l, (0, r.sprite_get_animation)("SD_BUMPER", 0)))
        },
        d = function(e, t) {
            (0, i.actor_render)(e.actor, t)
        },
        l = function(e) {
            (0, i.actor_destroy)(e.actor)
        },
        u = function(e, t) {
            var n = 1,
                o = 1e4,
                a = o / n,
                i = void 0,
                r = void 0,
                s = void 0,
                c = e.actor;
            i = t.actor_speed, i.x = i.x < 0 ? Math.min(-300, i.x) : Math.max(300, i.x), r = (0, _.v2d_multiply)((0, _.v2d_normalize)((0, _.v2d_subtract)(c.position, t.actor_position)), v2d_magnitude(i)), s = (0, _.v2d_multiply)(r, 1), t.actor_speed = (0, _.v2d_multiply)((0, _.v2d_add)(i, (0, _.v2d_multiply)(s, -a)), 1 / (a + 1)), c.speed = (0, _.v2d_multiply)((0, _.v2d_add)(i, s), 1 / (a + 1)), t.flying = !1, t.landing = !1, t.climbing = !1, t.spring = !1
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkpointorb_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(1),
        r = n(0),
        _ = n(7),
        s = (t.checkpointorb_create = function() {
            var e = {};
            return e.init = s, e.release = l, e.update = c, e.render = d, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, i.actor_create)(), t.is_active = !1, (0, i.actor_change_animation)(e.actor, (0, r.sprite_get_animation)("SD_CHECKPOINT", 0))
        }),
        c = function(e, t, n, s, c, d) {
            var l = e,
                u = e.actor,
                p = void 0;
            if (l.is_active)(0, i.actor_animation_finished)(u) && (0, i.actor_change_animation)(u, (0, r.sprite_get_animation)("SD_CHECKPOINT", 2));
            else
                for (p = 0; p < n; p++) {
                    var f = t[p];
                    if (f && !f.dying && (0, i.actor_pixelperfect_collision)(f.actor, u)) {
                        l.is_active = !0, (0, o.sound_play)((0, a.soundfactory_get)("checkpoint")), (0, _.level_set_spawn_point)(u.position), (0, i.actor_change_animation)(u, (0, r.sprite_get_animation)("SD_CHECKPOINT", 1));
                        break
                    }
                }
        },
        d = function(e, t) {
            (0, i.actor_render)(e.actor, t)
        },
        l = function(e) {
            (0, i.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.crushedbox_create = void 0;
    var o = n(0),
        a = n(1),
        i = (t.crushedbox_create = function() {
            var e = {};
            return e.init = i, e.release = s, e.update = r, e.render = _, e
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, a.actor_create)(), (0, a.actor_change_animation)(e.actor, (0, o.sprite_get_animation)("SD_ITEMBOX", 10))
        }),
        r = function(e, t, n, o, a, i) {},
        _ = function(e, t) {
            (0, a.actor_render)(e.actor, t)
        },
        s = function(e) {
            (0, a.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.verticalfiredanger_create = t.horizontalfiredanger_create = t.verticaldanger_create = t.horizontaldanger_create = void 0;
    var o = n(0),
        a = n(1),
        i = n(11),
        r = n(7),
        _ = (t.horizontaldanger_create = function() {
            return _("SD_DANGER", u)
        }, t.verticaldanger_create = function() {
            return _("SD_VERTICALDANGER", u)
        }, t.horizontalfiredanger_create = function() {
            return _("SD_FIREDANGER", p)
        }, t.verticalfiredanger_create = function() {
            return _("SD_VERTICALFIREDANGER", p)
        }, function(e, t) {
            var n = {},
                o = n;
            return n.init = s, n.release = l, n.update = c, n.render = d, o.sprite_name = e, o.player_is_vulnerable = t, n
        }),
        s = function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, a.actor_create)(), (0, a.actor_change_animation)(e.actor, (0, o.sprite_get_animation)(t.sprite_name, 0))
        },
        c = function(e, t, n, o, i, _) {
            var s = void 0,
                c = e,
                d = e.actor;
            for (s = 0; s < n; s++) {
                var l = t[s];
                l && (l.dying || l.blinking || l.invincible || !(0, a.actor_collision)(d, l.actor) || c.player_is_vulnerable(l) && l.hit(l))
            }
            d.visible = (0, r.level_editmode)()
        },
        d = function(e, t) {
            (0, a.actor_render)(e.actor, t)
        },
        l = function(e) {
            (0, a.actor_destroy)(e.actor)
        },
        u = function(e) {
            return !0
        },
        p = function(e) {
            return e.shield_type != i.SH_FIRESHIELD
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.dangerouspower_set_speed = t.dangerouspower_create = void 0;
    var o = n(0),
        a = n(3),
        i = n(2),
        r = n(1),
        _ = n(11),
        s = (t.dangerouspower_create = function() {
            var e = {};
            return e.init = c, e.release = u, e.update = d, e.render = l, e.dangerouspower_set_speed = s, e
        }, t.dangerouspower_set_speed = function(e, t) {
            e.actor_speed = t
        }),
        c = function(e) {
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, r.actor_create)(), (0, r.actor_change_animation)(e.actor, (0, o.sprite_get_animation)("SD_DANGPOWER", 0))
        },
        d = function(e, t, n, o, s, c) {
            var d = void 0,
                l = (0, a.timer_get_delta)(),
                u = e.actor,
                p = (0, i.v2d_multiply)(u.speed, l);
            for (d = 0; d < n; d++) {
                var f = t[d];
                f && !f.dying && (0, r.actor_collision)(u, f.actor) && (f.hit(f), e.state = _.IS_DEAD)
            }
            u.position = (0, i.v2d_add)(u.position, p)
        },
        l = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        u = function(e) {
            (0, r.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.charge_horizontal_dnadoor_create = t.neon_horizontal_dnadoor_create = t.surge_horizontal_dnadoor_create = t.charge_dnadoor_create = t.neon_dnadoor_create = t.surge_dnadoor_create = void 0;
    var o = n(0),
        a = n(3),
        i = n(9),
        r = n(1),
        _ = (n(11), n(16)),
        s = (t.surge_dnadoor_create = function() {
            return s(_.PL_SONIC, !0)
        }, t.neon_dnadoor_create = function() {
            return s(_.PL_TAILS, !0)
        }, t.charge_dnadoor_create = function() {
            return s(_.PL_KNUCKLES, !0)
        }, t.surge_horizontal_dnadoor_create = function() {
            return s(_.PL_SONIC, !1)
        }, t.neon_horizontal_dnadoor_create = function() {
            return s(_.PL_TAILS, !1)
        }, t.charge_horizontal_dnadoor_create = function() {
            return s(_.PL_KNUCKLES, !1)
        }, function(e, t) {
            var n = {},
                o = n;
            return n.init = c, n.release = u, n.update = d, n.render = l, o.authorized_player_type = e, o.is_vertical_door = t, n
        }),
        c = function(e) {
            var t = e,
                n = void 0,
                a = void 0;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !0, e.actor = (0, r.actor_create)(), a = parseInt(t.authorized_player_type, 10), n = t.is_vertical_door ? "SD_DNADOOR" : "SD_HORIZONTALDNADOOR", (0, r.actor_change_animation)(e.actor, (0, o.sprite_get_animation)(n, a))
        },
        d = function(e, t, n, o, _, s) {
            var c = {},
                d = e.actor,
                l = void 0,
                u = !1,
                f = !1,
                g = (0, a.timer_get_delta)(),
                v = [],
                m = [],
                h = 5,
                b = void 0;
            for (e.obstacle = !0, b = 0; b < n; b++) {
                var y = t[b];
                y && (y.dying || y.actor_carrying || y.actor_carried_by || !p(y, e) || (y.type == c.authorized_player_type ? (e.obstacle = !1, f = (0, r.actor_pixelperfect_collision)(d, y.actor)) : u = !0))
            }
            if (u && (e.obstacle = !0), e.obstacle ? d.alpha = Math.min(1, d.alpha + 2 * g) : f && (d.alpha = Math.max(.4, d.alpha - 2 * g)), f)
                for (v[0] = d.position.x - d.hot_spot.x - h, v[1] = d.position.y - d.hot_spot.y - h, v[2] = v[0] + (0, r.actor_image)(d).width + 2 * h, v[3] = v[1] + (0, r.actor_image)(d).height + 2 * h, l = _; null != l; l = l.next) l.data.type == e.type && (m[0] = l.data.actor_position.x - l.data.actor_hot_spot.x - h, m[1] = l.data.actor_position.y - l.data.actor_hot_spot.y - h, m[2] = m[0] + (0, r.actor_image)(l.data.actor).width + 2 * h, m[3] = m[1] + (0, r.actor_image)(l.data.actor).height + 2 * h, (0, i.bounding_box)(v, m) && (l.data.actor_alpha < d.alpha ? d.alpha = l.data.actor_alpha : l.data.actor_alpha = d.alpha))
        },
        l = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        u = function(e) {
            (0, r.actor_destroy)(e.actor)
        },
        p = function(e, t) {
            var n = [],
                o = [],
                a = 3,
                _ = e.actor,
                s = t.actor;
            return n[0] = _.position.x - _.hot_spot.x, n[1] = _.position.y - _.hot_spot.y, n[2] = n[0] + (0, r.actor_image)(_).width, n[3] = n[1] + (0, r.actor_image)(_).height, o[0] = s.position.x - s.hot_spot.x, o[1] = s.position.y - s.hot_spot.y - a, o[2] = o[0] + (0, r.actor_image)(s).width, o[3] = o[1] + (0, r.actor_image)(s).height + a, (0, i.bounding_box)(n, o)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.endsign_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(0),
        r = n(1),
        _ = n(7),
        s = (t.endsign_create = function() {
            var e = {};
            return e.init = s, e.release = l, e.update = c, e.render = d, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !0, e.actor = (0, r.actor_create)(), t.who = null, (0, r.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_ENDSIGN", 0))
        }),
        c = function(e, t, n, s, c, d) {
            var l = e,
                u = e.actor;
            if (null == l.who) {
                var p = void 0;
                for (p = 0; p < n; p++) {
                    var f = t[p];
                    f && !f.dying && (0, r.actor_pixelperfect_collision)(f.actor, u) && (l.who = f, (0, o.sound_play)((0, a.soundfactory_get)("end sign")), (0, r.actor_change_animation)(u, (0, i.sprite_get_animation)("SD_ENDSIGN", 1)), (0, _.level_clear)(e.actor))
                }
            } else if ((0, r.actor_animation_finished)(u)) {
                var g = 2 + l.who.type;
                (0, r.actor_change_animation)(u, (0, i.sprite_get_animation)("SD_ENDSIGN", g))
            }
        },
        d = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        l = function(e) {
            (0, r.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.explosion_create = void 0;
    var o = n(0),
        a = n(9),
        i = n(1),
        r = n(11),
        _ = (t.explosion_create = function() {
            var e = {};
            return e.init = _, e.release = d, e.update = s, e.render = c, e
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, i.actor_create)(), (0, i.actor_change_animation)(e.actor, (0, o.sprite_get_animation)("SD_EXPLOSION", (0, a.random)(2)))
        }),
        s = function(e, t, n, o, a, _) {
            (0, i.actor_animation_finished)(e.actor) && (e.state = r.IS_DEAD)
        },
        c = function(e, t) {
            (0, i.actor_render)(e.actor, t)
        },
        d = function(e) {
            (0, i.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.falglasses_set_speed = t.falglasses_create = void 0;
    var o = n(4),
        a = n(0),
        i = n(3),
        r = n(2),
        _ = n(7),
        s = n(1),
        c = (t.falglasses_create = function() {
            var e = {};
            return e.init = c, e.release = u, e.update = d, e.render = l, e
        }, t.falglasses_set_speed = function(e, t) {
            null != e.actor && (e.actor.speed = t)
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = actor.create(), (0, s.actor_change_animation)(e.actor, (0, a.sprite_get_animation)("SD_GLASSES", 4)), e.actor.hot_spot.y *= .5
        }),
        d = function(e, t, n, a, c, d) {
            var l = e.actor,
                u = (0, i.timer_get_delta)();
            l.angle += Math.sign(l.speed.x) * (6 * o.PI * u), l.position = (0, r.v2d_add)(l.position, (0, s.actor_particle_movement)(l, (0, _.level_gravity)()))
        },
        l = function(e, t) {
            (0, s.actor_render)(e.actor, t)
        },
        u = function(e) {
            (0, s.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.fireball_create = void 0;
    var o = n(4),
        a = n(9),
        i = n(2),
        r = n(1),
        _ = n(0),
        s = n(11),
        c = n(7),
        d = (t.fireball_create = function() {
            var e = {};
            return e.init = d, e.release = p, e.update = l, e.render = u, e
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, r.actor_create)(), f(e, g), (0, r.actor_change_animation)(e.actor, (0, _.sprite_get_animation)("SD_FIREBALL", 0))
        }),
        l = function(e, t, n, o, a, i) {
            var _ = void 0,
                c = e.actor,
                d = e;
            for (_ = 0; _ < n; _++) {
                var l = t[_];
                !l.dying && (0, r.actor_collision)(c, l.actor) && (e.state = s.IS_DEAD, l.shield_type != s.SH_FIRESHIELD && l.hit(l))
            }
            d.run(e, o)
        },
        u = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        p = function(e) {
            (0, r.actor_destroy)(e.actor)
        },
        f = function(e, t) {
            e.run = t
        },
        g = function(e, t) {
            var n = void 0,
                d = void 0,
                l = -2,
                u = e.actor,
                p = void 0;
            if (u.speed.x = 0, u.mirror = u.speed.y < 0 ? o.IF_VFLIP : o.IF_NONE, (0, r.actor_move)(u, (0, r.actor_particle_movement)(u, (0, c.level_gravity)())), (0, r.actor_change_animation)(u, (0, _.sprite_get_animation)("SD_FIREBALL", 0)), (0, r.actor_corners)(u, 2, l, t, null, null, null, null, p, null, null, null), (0, r.actor_handle_clouds)(u, l, null, null, null, null, p, null, null, null), p)
                for (f(e, v), sound_play(soundfactory_get("fire2")), d = 2 + (0, a.random)(3), n = 0; n < d; n++) {
                    var g = level_create_item(s.IT_FIREBALL, u.position);
                    f(g, m), g.actor_speed = (0, i.v2d_new)(n / d * 400 - 200, -120 - util.random(240))
                }
        },
        v = function(e, t) {
            var n = e.actor;
            (0, r.actor_change_animation)(n, (0, _.sprite_get_animation)("SD_FIREBALL", 1)), (0, r.actor_animation_finished)(n) && (e.state = s.IS_DEAD)
        },
        m = function(e, t) {
            var n = -2,
                o = e.actor,
                a = void 0;
            (0, r.actor_move)(o, (0, r.actor_particle_movement)(o, (0, c.level_gravity)())), (0, r.actor_change_animation)(o, sprit_get_animation("SD_FIREBALL", 2)), (0, r.actor_corners)(o, 2, n, t, null, null, null, null, a, null, null, null), (0, r.actor_handle_clouds)(o, n, null, null, null, null, a, null, null, null), a && o.speed.y > 0 && (e.state = s.IS_DEAD)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.flyingtext_set_text = t.flyingtext_create = void 0;
    var o = n(0),
        a = n(3),
        i = n(1),
        r = n(15),
        _ = n(11),
        s = (t.flyingtext_create = function() {
            var e = {};
            return e.init = c, e.release = u, e.update = d, e.render = l, e.set_text = s, e
        }, t.flyingtext_set_text = function(e, t) {
            var n = e;
            (0, r.font_set_text)(n.font, t)
        }),
        c = function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, i.actor_create)(), t.elapsed_time = 0, t.font = (0, r.font_create)(0), (0, r.font_set_text)(t.font, "0"), (0, i.actor_change_animation)(e.actor, (0, o.sprite_get_animation)("SD_RING", 0)), e.actor.visible = !1
        },
        d = function(e, t, n, o, i, r) {
            var s = e,
                c = (0, a.timer_get_delta)();
            s.elapsed_time += c, s.elapsed_time < .5 ? e.actor.position.y -= 100 * c : s.elapsed_time > 2 && (e.state = _.IS_DEAD), s.font.position = e.actor.position
        },
        l = function(e, t) {
            var n = e;
            (0, r.font_render)(n.font, t)
        },
        u = function(e) {
            var t = e;
            (0, i.actor_destroy)(e.actor), (0, r.font_destroy)(t.font)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.goalsign_create = void 0;
    var o = n(1),
        a = n(0),
        i = n(11),
        r = n(27),
        _ = (t.goalsign_create = function() {
            var e = {};
            return e.init = _, e.release = d, e.update = s, e.render = c, e
        }, function(e) {
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, o.actor_create)(), (0, o.actor_change_animation)(e.actor, (0, a.sprite_get_animation)("SD_GOAL", 0))
        }),
        s = function(e, t, n, _, s, c) {
            var d = void 0,
                l = (0, r.find_closest_item)(e, s, i.IT_ENDSIGN, null);
            d = null != l ? l.actor.position.x > e.actor.position.x ? 0 : 1 : 0, (0, o.actor_change_animation)(e.actor, (0, a.sprite_get_animation)("SD_GOAL", d))
        },
        c = function(e, t) {
            (0, o.actor_render)(e.actor, t)
        },
        d = function(e) {
            (0, o.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.icon_change_animation = t.icon_create = void 0;
    var o = n(12),
        a = n(1),
        i = n(0),
        r = n(3),
        _ = n(9),
        s = n(2),
        c = n(11),
        d = n(7),
        l = (t.icon_create = function() {
            var e = {};
            return e.init = u, e.release = g, e.update = p, e.render = f, e.change_animation = l, e
        }, t.icon_change_animation = function(e, t) {
            (0, a.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_ICON", t))
        }),
        u = function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !1, e.actor = (0, a.actor_create)(), t.elapsed_time = 0, l(e, 0)
        },
        p = function(e, t, n, i, l, u) {
            var p = e,
                f = e.actor,
                g = (0, r.timer_get_delta)();
            if (p.elapsed_time += g, p.elapsed_time < 1) f.position.y -= 40 * g;
            else if (p.elapsed_time >= 2.5) {
                var v = void 0,
                    m = void 0,
                    h = parseInt(f.position.x - f.hot_spot.x, 10),
                    b = parseInt(f.position.y - f.hot_spot.y, 10),
                    y = (0, a.actor_image)(f),
                    I = void 0;
                for (v = 0; v < y.h; v++)
                    for (m = 0; m < y.w; m++) I = (0, o.image_create)(1, 1), (0, o.image_clear)(I, 255, 255, 255), (0, d.level_create_particle)(I, (0, s.v2d_new)(h + m, b + v), (0, s.v2d_new)(m - y.width / 2 + ((0, _.random)(y.width) - y.width / 2), v - (0, _.random)(y.height / 2)), !1);
                e.state = c.IS_DEAD
            }
        },
        f = function(e, t) {
            (0, a.actor_render)(e.actor, t)
        },
        g = function(e) {
            (0, a.actor_destroy)(e.actor)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.windshieldbox_create = t.acidshieldbox_create = t.watershieldbox_create = t.thundershieldbox_create = t.fireshieldbox_create = t.emptybox_create = t.trapbox_create = t.shieldbox_create = t.glassesbox_create = t.speedbox_create = t.starbox_create = t.ringbox_create = t.lifebox_create = void 0;
    var o = n(11),
        a = n(2),
        i = n(0),
        r = n(5),
        _ = n(6),
        s = n(7),
        c = n(1),
        d = n(16),
        l = (t.lifebox_create = function() {
            return w(l, 0)
        }, t.ringbox_create = function() {
            return w(u, 3)
        }, t.starbox_create = function() {
            return w(p, 4)
        }, t.speedbox_create = function() {
            return w(f, 5)
        }, t.glassesbox_create = function() {
            return w(g, 6)
        }, t.shieldbox_create = function() {
            return w(v, 7)
        }, t.trapbox_create = function() {
            return w(E, 8)
        }, t.emptybox_create = function() {
            return w(x, 9)
        }, t.fireshieldbox_create = function() {
            return w(m, 11)
        }, t.thundershieldbox_create = function() {
            return w(h, 12)
        }, t.watershieldbox_create = function() {
            return w(b, 13)
        }, t.acidshieldbox_create = function() {
            return w(y, 14)
        }, t.windshieldbox_create = function() {
            return w(I, 15)
        }, function(e, t) {
            (0, s.level_add_to_score)(100), (0, d.player_set_lives)((0, d.player_get_lives)() + 1), (0, s.level_override_music)((0, _.soundfactory_get)("1up"))
        }),
        u = function(e, t) {
            (0, s.level_add_to_score)(100), (0, d.player_set_rings)((0, d.player_get_rings)() + 10), (0, r.sound_play)((0, _.soundfactory_get)("ring"))
        },
        p = function(e, t) {
            (0, s.level_add_to_score)(100), t.invincible = !0, t.invtimer = 0, (0, r.music_play)((0, r.music_load)("data/music/invincible.mp4"), 0)
        },
        f = function(e, t) {
            (0, s.level_add_to_score)(100), t.got_speedshoes = !0, t.speedshoes_timer = 0, (0, r.music_play)((0, r.music_load)("data/music/speed.mp4"), 0)
        },
        g = function(e, t) {
            (0, s.level_add_to_score)(100), t.got_glasses = !0
        },
        v = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_SHIELD, (0, r.sound_play)((0, _.soundfactory_get)("shield"))
        },
        m = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_FIRESHIELD, (0, r.sound_play)((0, _.soundfactory_get)("fire shield"))
        },
        h = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_THUNDERSHIELD, (0, r.sound_play)((0, _.soundfactory_get)("thunder shield"))
        },
        b = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_WATERSHIELD, (0, r.sound_play)((0, _.soundfactory_get)("water shield"))
        },
        y = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_ACIDSHIELD, (0, r.sound_play)((0, _.soundfactory_get)("acid shield"))
        },
        I = function(e, t) {
            (0, s.level_add_to_score)(100), t.shield_type = o.SH_WINDSHIELD, audio.sound_play((0, _.soundfactory_get)("wind shield"))
        },
        E = function(e, t) {
            player_hit(t)
        },
        x = function(e, t) {
            (0, s.level_add_to_score)(100)
        },
        w = function(e, t) {
            var n = {},
                o = n;
            return n.init = S, n.release = k, n.update = O, n.render = L, o.on_destroy = e, o.anim_id = t, n
        },
        S = function(e) {
            var t = e;
            e.obstacle = !0, e.bring_to_back = !1, e.preserve = !0, e.actor = (0, c.actor_create)(), (0, c.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_ITEMBOX", t.anim_id))
        },
        O = function(e, t, n, l, u, p) {
            var f = void 0,
                g = e.actor,
                v = e;
            for (f = 0; f < n; f++) {
                var m = t[f];
                if (m && !(m.actor.is_jumping && m.actor.speed.y < -10) && e.state === o.IS_IDLE && R(e, m) && (0, d.player_attacking)(m)) {
                    var h = (0, s.level_create_item)(o.IT_ICON, (0, a.v2d_add)(g.position, (0, a.v2d_new)(0, -5)));
                    h.change_animation(h, v.anim_id), (0, s.level_create_item)(o.IT_EXPLOSION, (0, a.v2d_add)(g.position, (0, a.v2d_new)(0, -20))), (0, s.level_create_item)(o.IT_CRUSHEDBOX, g.position), (0, r.sound_play)((0, _.soundfactory_get)("destroy")), m.actor.is_jumping && m.bounce(m), v.on_destroy(e, m), e.state = o.IS_DEAD
                }
            }
            v.anim_id = v.anim_id < t.length ? (0, s.level_player_id)() : v.anim_id, (0, c.actor_change_animation)(e.actor, (0, i.sprite_get_animation)("SD_ITEMBOX", v.anim_id))
        },
        L = function(e, t) {
            (0, c.actor_render)(e.actor, t)
        },
        k = function(e) {
            (0, c.actor_destroy)(e.actor)
        },
        R = function(e, t) {
            var n = void 0,
                o = e.actor,
                a = o.position;
            return n = (0, c.actor_collision)(e.actor, t.actor), e.actor.position = a, n
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loopfloortop_create = t.loopfloornone_create = t.loopfloor_create = t.loopnone_create = t.loopleft_create = t.looptop_create = t.loopright_create = void 0;
    var o = n(27),
        a = n(11),
        i = n(16),
        r = n(1),
        _ = n(0),
        s = (t.loopright_create = function() {
            return s(f, "SD_LOOPRIGHT")
        }, t.looptop_create = function() {
            return s(g, "SD_LOOPMIDDLE")
        }, t.loopleft_create = function() {
            return s(v, "SD_LOOPLEFT")
        }, t.loopnone_create = function() {
            return s(m, "SD_LOOPNONE")
        }, t.loopfloor_create = function() {
            return s(h, "SD_LOOPFLOOR")
        }, t.loopfloornone_create = function() {
            return s(b, "SD_LOOPFLOORNONE")
        }, t.loopfloortop_create = function() {
            return s(y, "SD_LOOPFLOORTOP")
        }, function(e, t) {
            var n = {},
                o = n;
            return n.init = c, n.release = d, n.update = l, n.render = u, o.on_collision = e, o.sprite_name = t, n
        }),
        c = function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !0, e.actor = (0, r.actor_create)(), e.actor = (0, r.actor_change_animation)(e.actor, (0, _.sprite_get_animation)(t.sprite_name, 0))
        },
        d = function(e) {},
        l = function(e, t, n, o, a, i) {
            var _ = e,
                s = e.actor,
                c = void 0;
            for (s.visible = !1, c = 0; c < n; c++) {
                var d = t[c];
                d && (0, r.actor_collision)(s, d.actor) && (d.at_loopfloortop = p(e, a, d), _.on_collision(d))
            }
        },
        u = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        },
        p = function(e, t, n) {
            var i = (0, o.find_closest_item)(e, t, a.IT_LOOPFLOORTOP, null);
            return null != i && (0, r.actor_collision)(n.actor, i.actor)
        },
        f = function(e) {
            e.disable_wall |= i.PLAYER_WALL_LEFT, e.entering_loop = !0, e.bring_to_back = !1
        },
        g = function(e) {
            if (!e.flying) {
                var t = e.actor.speed.x > 0;
                e.disable_wall &= ~(i.PLAYER_WALL_LEFT | i.PLAYER_WALL_RIGHT), e.disable_wall |= t ? i.PLAYER_WALL_RIGHT : i.PLAYER_WALL_LEFT, e.bring_to_back = t
            }
        },
        v = function(e) {
            e.disable_wall |= i.PLAYER_WALL_RIGHT, e.entering_loop = !0, e.bring_to_back = !0
        },
        m = function(e) {
            e.entering_loop || (e.disable_wall = i.PLAYER_WALL_NONE, e.bring_to_back = !1)
        },
        h = function(e) {
            e.at_loopfloortop || e.flying || (e.disable_wall |= i.PLAYER_WALL_BOTTOM, e.entering_loop = !0, e.bring_to_back = !0)
        },
        b = function(e) {
            e.at_loopfloortop || e.entering_loop || e.flying || (e.disable_wall &= ~i.PLAYER_WALL_BOTTOM, e.bring_to_back = !1)
        },
        y = function(e) {
            if (!e.flying)
                if (e.disable_wall & i.PLAYER_WALL_BOTTOM) {
                    var t = e.actor.speed.x > 0;
                    e.disable_wall &= ~(i.PLAYER_WALL_LEFT | i.PLAYER_WALL_RIGHT), e.disable_wall |= t ? i.PLAYER_WALL_RIGHT : i.PLAYER_WALL_LEFT, e.bring_to_back = !0
                } else e.disable_wall &= ~(i.PLAYER_WALL_LEFT | i.PLAYER_WALL_RIGHT), e.bring_to_back = !0
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.start_bouncing = t.ring_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(11),
        r = n(1),
        _ = n(0),
        s = n(3),
        c = n(13),
        d = n(9),
        l = (n(2), n(16)),
        u = n(7),
        p = (t.ring_create = function() {
            var e = {};
            return e.init = p, e.release = f, e.update = g, e.render = v, e
        }, t.start_bouncing = function(e) {
            e.is_moving = !0, e.actor.speed.x = e.actor.maxspeed * ((0, d.random)(100) - 50) / 100, e.actor.speed.y = -e.actor.jump_strength + (0, d.random)(e.actor.jump_strength)
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !1, e.preserve = !0, e.actor = (0, r.actor_create)(), e.actor.maxspeed = 220 + (0, d.random)(140), e.actor.jump_strength = 1.2 * (350 + (0, d.random)(50)), e.actor.input = (0, c.input_create_computer)(), t.is_disappearing = !1, t.is_moving = !1, t.life_time = 0, (0, r.actor_change_animation)(e.actor, (0, _.sprite_get_animation)("SD_RING", 0))
        }),
        f = function(e) {},
        g = function(e, t, n, p, f, g) {
            var v = void 0,
                m = (0, s.timer_get_delta)(),
                h = e,
                b = e.actor;
            for (v = 0; v < n; v++) {
                var y = t[v];
                if (y && (!h.is_moving || h.is_moving && !y.getting_hit && h.life_time >= .5) && !h.is_disappearing && !y.dying && (0, r.actor_collision)(b, y.actor)) {
                    (0, l.player_set_rings)((0, l.player_get_rings)() + 1), h.is_disappearing = !0, (0, o.sound_play)((0, a.soundfactory_get)("ring"));
                    break
                }
            }
            if (h.is_disappearing)(0, r.actor_change_animation)(b, (0, _.sprite_get_animation)("SD_RING", 1)), (0, r.actor_animation_finished)(b) && (e.state = i.IS_DEAD);
            else if (h.is_moving) {
                var I = null,
                    E = null,
                    x = null;
                if ((0, c.input_simulate_button_down)(b.input, c.IB_FIRE1), e.preserve = !1, h.life_time += m, h.life_time > 5) {
                    var w = 240 + (0, d.random)(20);
                    b.visible = parseInt(((0, s.timer_get_ticks)(), 10)) < w / 2, h.life_time > 8 && (e.state = i.IS_DEAD)
                }
                E && b.speed.x > 0 && (b.speed.x = -Math.abs(b.speed.x)), I && b.speed.x < 0 && (b.speed.x = Math.abs(b.speed.x)), x && b.speed.y > 0 && (b.jump_strength *= .95), (0, r.actor_move)(b, (0, r.actor_platform_movement)(b, p, (0, u.level_gravity)()))
            }
        },
        v = function(e, t) {
            (0, r.actor_render)(e.actor, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.periodic_rightwallspikes_create = t.periodic_leftwallspikes_create = t.periodic_ceilingspikes_create = t.periodic_floorspikes_create = t.rightwallspikes_create = t.leftwallspikes_create = t.ceilingspikes_create = t.floorspikes_create = void 0;
    var o = n(5),
        a = n(6),
        i = n(4),
        r = n(9),
        _ = n(3),
        s = n(1),
        c = n(0),
        d = n(16),
        l = (t.floorspikes_create = function() {
            return l(m, 0, i.INFINITY_FLT)
        }, t.ceilingspikes_create = function() {
            return l(h, 2, i.INFINITY_FLT)
        }, t.leftwallspikes_create = function() {
            return l(b, 1, i.INFINITY_FLT)
        }, t.rightwallspikes_create = function() {
            return l(y, 3, i.INFINITY_FLT)
        }, t.periodic_floorspikes_create = function() {
            return l(m, 0, 5)
        }, t.periodic_ceilingspikes_create = function() {
            return l(h, 2, 5)
        }, t.periodic_leftwallspikes_create = function() {
            return l(b, 1, 5)
        }, t.periodic_rightwallspikes_create = function() {
            return l(y, 3, 5)
        }, function(e, t, n) {
            var o = {},
                a = o;
            return o.init = u, o.release = p, o.update = f, o.render = g, a.collision = e, a.anim_id = t, a.cycle_length = n, o
        }),
        u = function(e) {
            var t = e;
            e.obstacle = !0, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, s.actor_create)(), t.timer = 0, t.hidden = !1, (0, s.actor_change_animation)(e.actor, (0, c.sprite_get_animation)("SD_SPIKES", t.anim_id))
        },
        p = function(e) {
            (0, s.actor_destroy)(e.actor)
        },
        f = function(e, t, n, i, r, s) {
            var c = e,
                l = (0, _.timer_get_delta)();
            if (c.timer += l, c.timer >= .5 * c.cycle_length && (c.timer = 0, c.hidden = !c.hidden, (0, o.sound_play)((0, a.soundfactory_get)(c.hidden ? "spikes disappearing" : "spikes appearing"))), e.obstacle = !c.hidden, e.actor.visible = !c.hidden, !c.hidden) {
                var u = void 0;
                for (u = 0; u < n; u++) {
                    var p = t[u];
                    if (p && !p.dying && !p.blinking && !p.invincible && c.collision(e, p)) {
                        var f = (0, a.soundfactory_get)("spikes hit");
                        sound_is_playing(f) || (0, o.sound_play)(f), (0, d.player_hit)(p)
                    }
                }
            }
        },
        g = function(e, t) {
            (0, s.actor_render)(e.actor, t)
        },
        v = function(e, t) {
            var n = [],
                o = e.actor;
            return n[0] = o.position.x - o.hot_spot.x, n[1] = o.position.y - o.hot_spot.y, n[2] = n[0] + (0, s.actor_image)(o).width, n[3] = n[1] + (0, s.actor_image)(o).height, (0, r.bounding_box)(n, t)
        },
        m = function(e, t) {
            var n = [],
                o = void 0,
                a = e.actor;
            return n[0] = a.position.x - a.hot_spot.x + 5, n[1] = a.position.y - a.hot_spot.y - 5, n[2] = n[0] + (0, s.actor_image)(a).width - 10, n[3] = n[1] + 10, o = t.actor.position.y - t.actor.hot_spot.y + (0, s.actor_image)(t.actor).height, v(t, n) && o < a.position.y - a.hot_spot.y + (0, s.actor_image)(a).height / 2
        },
        h = function(e, t) {
            var n = [],
                o = e.actor;
            return n[0] = o.position.x - o.hot_spot.x + 5, n[1] = o.position.y - o.hot_spot.y + (0, s.actor_image)(o).height - 5, n[2] = n[0] + (0, s.actor_image)(o).width - 10, n[3] = n[1] + 10, v(t, n)
        },
        b = function(e, t) {
            var n = [],
                o = e.actor;
            return n[0] = o.position.x - o.hot_spot.x + (0, s.actor_image)(o).width - 5, n[1] = o.position.y - o.hot_spot.y + 5, n[2] = n[0] + 10, n[3] = n[1] + (0, s.actor_image)(o).height - 10, v(t, n)
        },
        y = function(e, t) {
            var n = [],
                o = e.actor;
            return n[0] = o.position.x - o.hot_spot.x - 5, n[1] = o.position.y - o.hot_spot.y + 5, n[2] = n[0] + 10, n[3] = n[1] + (0, s.actor_image)(o).height - 10, v(t, n)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.tlbluespring_create = t.lbluespring_create = t.blbluespring_create = t.bbluespring_create = t.brbluespring_create = t.rbluespring_create = t.trbluespring_create = t.bluespring_create = t.tlredspring_create = t.lredspring_create = t.blredspring_create = t.bredspring_create = t.brredspring_create = t.rredspring_create = t.trredspring_create = t.redspring_create = t.tlyellowspring_create = t.lyellowspring_create = t.blyellowspring_create = t.byellowspring_create = t.bryellowspring_create = t.ryellowspring_create = t.tryellowspring_create = t.yellowspring_create = void 0;
    var o = n(4),
        a = n(5),
        i = n(6),
        r = n(0),
        _ = n(3),
        s = n(2),
        c = n(1),
        d = .2,
        l = (t.yellowspring_create = function() {
            return l(v, "SD_YELLOWSPRING", (0, s.v2d_new)(0, -500))
        }, t.tryellowspring_create = function() {
            return l(m, "SD_TRYELLOWSPRING", (0, s.v2d_new)(400, -600))
        }, t.ryellowspring_create = function() {
            return l(m, "SD_RYELLOWSPRING", (0, s.v2d_new)(600, 0))
        }, t.bryellowspring_create = function() {
            return l(m, "SD_BRYELLOWSPRING", (0, s.v2d_new)(400, 600))
        }, t.byellowspring_create = function() {
            return l(m, "SD_BYELLOWSPRING", (0, s.v2d_new)(0, 500))
        }, t.blyellowspring_create = function() {
            return l(m, "SD_BLYELLOWSPRING", (0, s.v2d_new)(-400, 600))
        }, t.lyellowspring_create = function() {
            return l(m, "SD_LYELLOWSPRING", (0, s.v2d_new)(-600, 0))
        }, t.tlyellowspring_create = function() {
            return l(m, "SD_TLYELLOWSPRING", (0, s.v2d_new)(-400, -600))
        }, t.redspring_create = function() {
            return l(v, "SD_REDSPRING", (0, s.v2d_new)(0, -750))
        }, t.trredspring_create = function() {
            return l(m, "SD_TRREDSPRING", (0, s.v2d_new)(800, -1e3))
        }, t.rredspring_create = function() {
            return l(m, "SD_RREDSPRING", (0, s.v2d_new)(1200, 0))
        }, t.brredspring_create = function() {
            return l(m, "SD_BRREDSPRING", (0, s.v2d_new)(800, 1e3))
        }, t.bredspring_create = function() {
            return l(m, "SD_BREDSPRING", (0, s.v2d_new)(0, 750))
        }, t.blredspring_create = function() {
            return l(m, "SD_BLREDSPRING", (0, s.v2d_new)(-800, 1e3))
        }, t.lredspring_create = function() {
            return l(m, "SD_LREDSPRING", (0, s.v2d_new)(-1200, 0))
        }, t.tlredspring_create = function() {
            return l(m, "SD_TLREDSPRING", (0, s.v2d_new)(-800, -1e3))
        }, t.bluespring_create = function() {
            return l(v, "SD_BLUESPRING", (0, s.v2d_new)(0, -1500))
        }, t.trbluespring_create = function() {
            return l(m, "SD_TRBLUESPRING", (0, s.v2d_new)(1800, -1500))
        }, t.rbluespring_create = function() {
            return l(m, "SD_RBLUESPRING", (0, s.v2d_new)(2e3, 0))
        }, t.brbluespring_create = function() {
            return l(m, "SD_BRBLUESPRING", (0, s.v2d_new)(1800, 1500))
        }, t.bbluespring_create = function() {
            return l(m, "SD_BBLUESPRING", (0, s.v2d_new)(0, 1500))
        }, t.blbluespring_create = function() {
            return l(m, "SD_BLBLUESPRING", (0, s.v2d_new)(-1800, 1500))
        }, t.lbluespring_create = function() {
            return l(m, "SD_LBLUESPRING", (0, s.v2d_new)(-2e3, 0))
        }, t.tlbluespring_create = function() {
            return l(m, "SD_TLBLUESPRING", (0, s.v2d_new)(-1800, -1500))
        }, function(e, t, n) {
            var o = {};
            return o.init = u, o.release = p, o.update = f, o.render = g, o.on_bump = e, o.sprite_name = t, o.strength = n, o
        }),
        u = function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, c.actor_create)(), t.is_bumping = !1, t.bang_timer = 0, (0, c.actor_change_animation)(e.actor, (0, r.sprite_get_animation)(t.sprite_name, 0))
        },
        p = function(e) {},
        f = function(e, t, n, o, a, i) {
            var s = e,
                d = (0, _.timer_get_delta)(),
                l = void 0;
            for (s.bang_timer += d, l = 0; l < n; l++) {
                var u = t[l];
                u && !u.dying && (0, c.actor_pixelperfect_collision)(u.actor, e.actor) && s.on_bump(e, u)
            }
            s.is_bumping && (0, c.actor_animation_finished)(e.actor) && ((0, c.actor_change_animation)(e.actor, (0, r.sprite_get_animation)(s.sprite_name, 0)), s.is_bumping = !1)
        },
        g = function(e, t) {
            (0, c.actor_render)(e.actor, t)
        },
        v = function(e, t) {
            t.actor.speed.y >= 1 && !t.actor.carrying && !t.actor.carried_by && b(e, t)
        },
        m = function(e, t) {
            b(e, t)
        },
        h = function(e, t) {
            var n = (0, _.timer_get_delta)(),
                a = [],
                i = [];
            a[0] = t.x * e.actor.speed.x >= 0, a[1] = t.y * e.actor.speed.y >= 0, i[0] = t.x * e.actor.speed.x <= 0 && Math.abs(t.x) > o.EPSILON, i[1] = t.y * e.actor.speed.y <= 0 && Math.abs(t.y) > o.EPSILON, Math.abs(t.y) > o.EPSILON && (e.spring = !0), e.flying = !1, e.climbing = !1, e.landing = !1, e.getting_hit = !1, e.is_fire_jumping = !1, (Math.abs(t.x) > Math.abs(e.actor.speed.x) && a[0] || i[0]) && (e.actor.speed.x = t.x), (Math.abs(t.y) > Math.abs(e.actor.speed.y) && a[1] || i[1]) && (e.actor.speed.y = t.y, e.actor.position.y += e.actor.speed.y * n)
        },
        b = function(e, t) {
            var n = e;
            e.is_bumping = !0, h(t, e.strength), (0, c.actor_change_animation)(n.actor, (0, r.sprite_get_animation)(e.sprite_name, 1)), e.strength.x > o.EPSILON ? t.actor.mirror &= ~o.IF_HFLIP : e.strength.x < -o.EPSILON && (t.actor.mirror |= o.IF_HFLIP), e.bang_timer > d && ((0, a.sound_play)((0, i.soundfactory_get)("spring")), e.bang_timer = 0)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.switch_create = void 0;
    var o = n(31),
        a = n(32),
        i = n(27),
        r = n(11),
        _ = n(5),
        s = n(0),
        c = n(6),
        d = n(9),
        l = n(1),
        u = (t.switch_create = function() {
            var e = {};
            return e.init = u, e.release = p, e.update = f, e.render = g, e
        }, function(e) {
            var t = e;
            e.obstacle = !1, e.bring_to_back = !0, e.preserve = !0, e.actor = (0, l.actor_create)(), t.is_pressed = !1, t.partner = null, (0, l.actor_change_animation)(e.actor, (0, s.sprite_get_animation)("SD_SWITCH", 0))
        }),
        p = function(e) {
            (0, l.actor_destroy)(e.actor)
        },
        f = function(e, t, n, o, a, _) {
            var s = e,
                c = void 0,
                d = void 0,
                l = {},
                u = {};
            s.partner = null, c = (0, i.find_closest_item)(e, a, r.IT_DOOR, l), d = (0, i.find_closest_item)(e, a, r.IT_TELEPORTER, u), null != c && l.dist < u.dist && (s.partner = c), null != d && u.dist < l.dist && (s.partner = d), null == s.partner ? v(e, c, t, n, m, h) : s.partner == c ? v(e, c, t, n, b, y) : s.partner == d && v(e, d, t, n, I, E)
        },
        g = function(e, t) {
            (0, l.actor_render)(e.actor, t)
        },
        v = function(e, t, n, o, a, i) {
            var r = void 0,
                d = !0,
                u = e,
                p = e.actor;
            for (r = 0; r < o; r++) {
                var f = n[r];
                x(e, f) && (d = !1, u.is_pressed || (a(t, f), (0, _.sound_play)((0, c.soundfactory_get)("switch")), (0, l.actor_change_animation)(p, (0, s.sprite_get_animation)("SD_SWITCH", 1)), u.is_pressed = !0))
            }
            d && u.is_pressed && (i(t), (0, l.actor_change_animation)(p, (0, s.sprite_get_animation)("SD_SWITCH", 0)), u.is_pressed = !1)
        },
        m = function(e, t) {},
        h = function(e) {},
        b = function(e, t) {
            (0, o.door_open)(e)
        },
        y = function(e) {
            (0, o.door_close)(e)
        },
        I = function(e, t) {
            (0, a.teleporter_activate)(e, t)
        },
        E = function(e) {},
        x = function(e, t) {
            if (!e) return !1;
            if (!t) return !1;
            var n = [],
                o = [];
            return n[0] = e.actor.position.x - e.actor.hot_spot.x, n[1] = e.actor.position.y - e.actor.hot_spot.y, n[2] = n[0] + (0, l.actor_image)(e.actor).width, n[3] = n[1] + (0, l.actor_image)(e.actor).height, o[0] = t.actor.position.x - t.actor.hot_spot.x + .3 * (0, l.actor_image)(t.actor).width, o[1] = t.actor.position.y - t.actor.hot_spot.y + .5 * (0, l.actor_image)(t.actor).height, o[2] = o[0] + .4 * (0, l.actor_image)(t.actor).width, o[3] = o[1] + .5 * (0, l.actor_image)(t.actor).height, !t.dying && !t.climbing && !t.flying && (0, d.bounding_box)(n, o)
        }
}, function(e, t, n) {
    "use strict";

    function o(e, t) {
        var n = t,
            o = void 0;
        if (0 === n.state) {
            var r = e.state.name;
            n.state;
            for (n.vm.state_list = (0, Se.object_vm_create_state)(n.vm, e.state.list), n.vm = (0, Se.object_vm_set_current_state)(n.vm, r), o = (0, Se.object_vm_get_reference_to_current_state)(n.vm), Ae = 0, a(e.state.list, o); Ae-- > 0;) o = i(je[Ae].stmt, je[Ae].machine);
            o && o.init(o)
        }
        return n.vm.reference_to_current_state = o, e.destroy_if_far_from_play_area && (n.preserve = !1), e.always_active && (n.always_active = !0), e.hide_unless_in_editor_mode && (n.hide_unless_in_editor_mode = !0), n
    }

    function a(e, t) {
        return Ae < Me ? (je[Ae] = {}, je[Ae].stmt = e, je[Ae].machine = t, Ae++) : (0, we.logfile_message)("Object script error: you may write %d commands or less per state", Me), 0
    }

    function i(e, t) {
        var n = e,
            o = void 0,
            a = void 0,
            i = void 0,
            _ = void 0;
        for (a = n.length, o = 0; o < a; o++) i = n[o], _ = i[1] && void 0 !== i[1] ? i[1].length ? i[1].length : 1 : 0, t = r(t, i[0], _, i[1]);
        return t
    }

    function r(e, t, n, o) {
        for (var a = 0, i = Be[a++]; null != i.command && null != i.action;) i.command == t && (e = i.action(e, n, o)), i = Be[a++];
        return e
    }

    function _(e, t, n) {
        return 2 == t ? e = (0, De.setanimation_new)(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - set_animation expects two parameters: sprite_name, animation_id"), e
    }

    function s(e, t, n) {
        1 == t ? e = objectdecorator_setobstacle_new(e, n[0], 0) : 2 == t ? e = objectdecorator_setobstacle_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - set_obstacle expects at least one and at most two parameters: is_obstacle (TRUE or FALSE) [, angle]")
    }

    function c(e, t, n) {
        1 == t ? e = objectdecorator_setalpha_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - set_alpha expects one parameter: alpha (0.0 (transparent) <= alpha <= 1.0 (opaque))")
    }

    function d(e, t, n) {
        0 == t ? e = objectdecorator_setalpha_new(e, 0) : (0, we.logfile_fatal_error)("Object script error - hide expects no parameters")
    }

    function l(e, t, n) {
        0 == t ? e = objectdecorator_setalpha_new(e, 1) : (0, we.logfile_fatal_error)("Object script error - show expects no parameters")
    }

    function u(e, t, n) {
        4 == t ? e = objectdecorator_lockcamera_new(e, n[0], n[1], n[2], n[3]) : (0, we.logfile_fatal_error)("Object script error - lock_camera expects four parameters: x1, y1, x2, y2")
    }

    function p(e, t, n) {
        2 == t ? e = objectdecorator_moveplayer_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - move_player expects two parameters: speed_x, speed_y")
    }

    function f(e, t, n) {
        0 == t ? e = objectdecorator_hitplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - hit_player expects no parameters")
    }

    function g(e, t, n) {
        0 == t ? e = objectdecorator_burnplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - burn_player expects no parameters")
    }

    function v(e, t, n) {
        0 == t ? e = objectdecorator_shockplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - shock_player expects no parameters")
    }

    function m(e, t, n) {
        0 == t ? e = objectdecorator_acidplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - acid_player expects no parameters")
    }

    function h(e, t, n) {
        1 == t ? e = objectdecorator_addrings_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - add_rings expects one parameter: number_of_rings")
    }

    function b(e, t, n) {
        1 == t ? e = objectdecorator_addtoscore_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - add_to_score expects one parameter: score")
    }

    function y(e, t, n) {
        2 == t ? e = objectdecorator_setplayeranimation_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - set_player_animation expects two parameters: sprite_name, animation_id")
    }

    function I(e, t, n) {
        0 == t ? e = objectdecorator_enableplayermovement_new(e) : (0, we.logfile_fatal_error)("Object script error - enable_player_movement expects no parameters")
    }

    function E(e, t, n) {
        0 == t ? e = objectdecorator_disableplayermovement_new(e) : (0, we.logfile_fatal_error)("Object script error - disable_player_movement expects no parameters")
    }

    function x(e, t, n) {
        1 == t ? e = objectdecorator_setplayerxspeed_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - set_player_xspeed expects one parameter: speed")
    }

    function w(e, t, n) {
        1 == t ? e = objectdecorator_setplayeryspeed_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - set_player_yspeed expects one parameter: speed")
    }

    function S(e, t, n) {
        2 == t ? e = objectdecorator_setplayerposition_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - set_player_position expects two parameters: xpos, ypos")
    }

    function O(e, t, n) {
        0 == t ? e = objectdecorator_bounceplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - bounce_player expects no parameters")
    }

    function L(e, t, n) {
        1 == t ? e = objectdecorator_observeplayer_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - observe_player expects one parameter: player_name")
    }

    function k(e, t, n) {
        0 == t ? e = objectdecorator_observecurrentplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - observe_current_player expects no parameters")
    }

    function R(e, t, n) {
        0 == t ? e = objectdecorator_observeactiveplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - observe_active_player expects no parameters")
    }

    function N(e, t, n) {
        0 == t ? e = objectdecorator_observeallplayers_new(e) : (0, we.logfile_fatal_error)("Object script error - observe_all_players expects no parameters")
    }

    function T(e, t, n) {
        0 == t ? e = objectdecorator_attachtoplayer_new(e, 0, 0) : 1 == t ? e = objectdecorator_attachtoplayer_new(e, n[0], 0) : 2 == t ? e = objectdecorator_attachtoplayer_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - attach_to_player expects at most two parameters: [offset_x [, offset_y]]")
    }

    function D(e, t, n) {
        0 == t ? e = objectdecorator_springfyplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - springfy_player expects no parameters")
    }

    function P(e, t, n) {
        0 == t ? e = objectdecorator_rollplayer_new(e) : (0, we.logfile_fatal_error)("Object script error - roll_player expects no parameters")
    }

    function M(e, t, n) {
        return 1 == t ? e = (0, Le.enemy_new)(e, n) : (0, we.logfile_fatal_error)("Object script error - enemy expects one parameter: score"), e
    }

    function A(e, t, n) {
        return 1 == t ? e = (0, Pe.walk_new)(e, n) : (0, we.logfile_fatal_error)("Object script error - walk expects one parameter: speed"), e
    }

    function j(e, t, n) {
        return 0 == t ? e = (0, Re.gravity_new)(e) : (0, we.logfile_fatal_error)("Object script error - gravity expects no parameters"), e
    }

    function B(e, t, n) {
        1 == t ? e = objectdecorator_jump_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - jump expects one parameter: jump_strength")
    }

    function C(e, t, n) {
        return 2 == t ? e = (0, Oe.bullettrajectory_new)(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - bullet_trajectory expects two parameters: speed_x, speed_y"), e
    }

    function F(e, t, n) {
        return t >= 4 && t <= 6 ? e = (0, ke.ellipticaltrajectory_new)(e, n[0], n[1], n[2], n[3], n[4], n[5]) : (0, we.logfile_fatal_error)("Object script error - elliptical_trajectory expects at least four and at most six parameters: amplitude_x, amplitude_y, angularspeed_x, angularspeed_y [, initialphase_x [, initialphase_y]]"), e
    }

    function H(e, t, n) {
        return 1 == t ? e = (0, Te.mosquitomovement_new)(e, n) : (0, we.logfile_fatal_error)("Object script error - mosquito_movement expects one parameter: speed"), e
    }

    function G(e, t, n) {
        0 == t ? e = (0, Ne.lookleft_new)(e) : (0, we.logfile_fatal_error)("Object script error - look_left expects no parameters")
    }

    function V(e, t, n) {
        0 == t ? e = (0, Ne.lookright_new)(e) : (0, we.logfile_fatal_error)("Object script error - look_right expects no parameters")
    }

    function W(e, t, n) {
        return 0 == t ? e = (0, Ne.lookatplayer_new)(e) : (0, we.logfile_fatal_error)("Object script error - look_at_player expects no parameters"), e
    }

    function U(e, t, n) {
        return 0 == t ? e = (0, Ne.lookatwalkingdirection_new)(e) : (0, we.logfile_fatal_error)("Object script error - look_at_walking_direction expects no parameters"), e
    }

    function Y(e, t, n) {
        3 == t ? e = objectdecorator_createitem_new(e, n[0], n[1], n[2]) : (0, we.logfile_fatal_error)("Object script error - create_item expects three parameters: item_id, offset_x, offset_y")
    }

    function X(e, t, n) {
        2 == t ? e = objectdecorator_changeclosestobjectstate_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - change_closest_object_state expects two parameters: object_name, new_state_name")
    }

    function K(e, t, n) {
        3 == t ? e = objectdecorator_createchild_new(e, n[0], n[1], n[2], "") : 4 == t ? e = objectdecorator_createchild_new(e, n[0], n[1], n[2], n[3]) : (0, we.logfile_fatal_error)("Object script error - create_child expects three or four parameters: object_name, offset_x, offset_y [, child_name]")
    }

    function z(e, t, n) {
        2 == t ? e = objectdecorator_changechildstate_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - change_child_state expects two parameters: child_name, new_state_name")
    }

    function q(e, t, n) {
        1 == t ? e = objectdecorator_changeparentstate_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - change_parent_state expects one parameter: new_state_name")
    }

    function $(e, t, n) {
        0 == t ? e = objectdecorator_destroy_new(e) : (0, we.logfile_fatal_error)("Object script error - destroy expects no parameters")
    }

    function Q(e, t, n) {
        1 == t ? e = objectdecorator_ontimeout_new(e, 0, n[0]) : (0, we.logfile_fatal_error)("Object script error - change_state expects one parameter: new_state_name")
    }

    function J(e, t, n) {
        2 == t ? e = objectdecorator_ontimeout_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - on_timeout expects two parameters: timeout (in seconds), new_state_name")
    }

    function Z(e, t, n) {
        2 == t ? e = objectdecorator_oncollision_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - on_collision expects two parameters: object_name, new_state_name")
    }

    function ee(e, t, n) {
        1 == t ? e = objectdecorator_onanimationfinished_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_animation_finished expects one parameter: new_state_name")
    }

    function te(e, t, n) {
        2 == t ? e = objectdecorator_onrandomevent_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - on_random_event expects two parameters: probability (0.0 <= probability <= 1.0), new_state_name")
    }

    function ne(e, t, n) {
        1 == t ? e = objectdecorator_onplayercollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_player_collision expects one parameter: new_state_name")
    }

    function oe(e, t, n) {
        1 == t ? e = objectdecorator_onplayerattack_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_player_attack expects one parameter: new_state_name")
    }

    function ae(e, t, n) {
        5 == t ? e = objectdecorator_onplayerrectcollision_new(e, n[0], n[1], n[2], n[3], n[4]) : (0, we.logfile_fatal_error)("Object script error - on_player_rect_collision expects five parameters: offset_x1, offset_y1, offset_x2, offset_y2, new_state_name")
    }

    function ie(e, t, n) {
        1 == t ? e = objectdecorator_onnoshield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_no_shield expects one parameter: new_state_name")
    }

    function re(e, t, n) {
        1 == t ? e = objectdecorator_onshield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_shield expects one parameter: new_state_name")
    }

    function _e(e, t, n) {
        1 == t ? e = objectdecorator_onfireshield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_fire_shield expects one parameter: new_state_name")
    }

    function se(e, t, n) {
        1 == t ? e = objectdecorator_onthundershield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_thunder_shield expects one parameter: new_state_name")
    }

    function ce(e, t, n) {
        1 == t ? e = objectdecorator_onwatershield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_water_shield expects one parameter: new_state_name")
    }

    function de(e, t, n) {
        1 == t ? e = objectdecorator_onacidshield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_acid_shield expects one parameter: new_state_name")
    }

    function le(e, t, n) {
        1 == t ? e = objectdecorator_onwindshield_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_wind_shield expects one parameter: new_state_name")
    }

    function ue(e, t, n) {
        1 == t ? e = objectdecorator_onbrickcollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_brick_collision expects one parameter: new_state_name")
    }

    function pe(e, t, n) {
        1 == t ? e = objectdecorator_onfloorcollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_floor_collision expects one parameter: new_state_name")
    }

    function fe(e, t, n) {
        1 == t ? e = objectdecorator_onceilingcollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_ceiling_collision expects one parameter: new_state_name")
    }

    function ge(e, t, n) {
        1 == t ? e = objectdecorator_onleftwallcollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_left_wall_collision expects one parameter: new_state_name")
    }

    function ve(e, t, n) {
        1 == t ? e = objectdecorator_onrightwallcollision_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - on_right_wall_collision expects one parameter: new_state_name")
    }

    function me(e, t, n) {
        2 == t ? e = objectdecorator_showdialogbox_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - show_dialog_box expects two parameters: title, message")
    }

    function he(e, t, n) {
        0 == t ? e = objectdecorator_hidedialogbox_new(e) : (0, we.logfile_fatal_error)("Object script error - hide_dialog_box expects no parameters")
    }

    function be(e, t, n) {
        0 == t ? e = objectdecorator_clearlevel_new(e) : (0, we.logfile_fatal_error)("Object script error - clear_level expects no parameters")
    }

    function ye(e, t, n) {
        1 == t ? e = objectdecorator_playsample_new(e, n[0], 1, 0, 1, 0) : 2 == t ? e = objectdecorator_playsample_new(e, n[0], n[1], 0, 1, 0) : 3 == t ? e = objectdecorator_playsample_new(e, n[0], n[1], n[2], 1, 0) : 4 == t ? e = objectdecorator_playsample_new(e, n[0], n[1], n[2], n[3], 0) : 5 == t ? e = objectdecorator_playsample_new(e, n[0], n[1], n[2], n[3], n[4]) : (0, we.logfile_fatal_error)("Object script error - play_sample expects at least one and at most five parameters: sound_name [, volume [, pan [, frequency [, loops]]]]")
    }

    function Ie(e, t, n) {
        1 == t ? e = objectdecorator_playmusic_new(e, n[0], 0) : 2 == t ? e = objectdecorator_playmusic_new(e, n[0], n[1]) : (0, we.logfile_fatal_error)("Object script error - play_music expects at least one and at most two parameters: music_name [, loops]")
    }

    function Ee(e, t, n) {
        0 == t ? e = objectdecorator_playlevelmusic_new(e) : (0, we.logfile_fatal_error)("Object script error - play_level_music expects no parameters")
    }

    function xe(e, t, n) {
        1 == t ? e = objectdecorator_setmusicvolume_new(e, n[0]) : (0, we.logfile_fatal_error)("Object script error - set_music_volume expects one parameter: volume")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.object_compiler_compile = void 0;
    var we = n(8),
        Se = n(33),
        Oe = n(65),
        Le = n(67),
        ke = n(66),
        Re = n(68),
        Ne = n(69),
        Te = n(70),
        De = n(71),
        Pe = n(72),
        Me = 1024,
        Ae = void 0,
        je = {},
        Be = [{
            command: "set_animation",
            action: _
        }, {
            command: "set_obstacle",
            action: s
        }, {
            command: "set_alpha",
            action: c
        }, {
            command: "hide",
            action: d
        }, {
            command: "show",
            action: l
        }, {
            command: "enemy",
            action: M
        }, {
            command: "lock_camera",
            action: u
        }, {
            command: "move_player",
            action: p
        }, {
            command: "hit_player",
            action: f
        }, {
            command: "burn_player",
            action: g
        }, {
            command: "shock_player",
            action: v
        }, {
            command: "acid_player",
            action: m
        }, {
            command: "add_rings",
            action: h
        }, {
            command: "add_to_score",
            action: b
        }, {
            command: "set_player_animation",
            action: y
        }, {
            command: "enable_player_movement",
            action: I
        }, {
            command: "disable_player_movement",
            action: E
        }, {
            command: "set_player_xspeed",
            action: x
        }, {
            command: "set_player_yspeed",
            action: w
        }, {
            command: "set_player_position",
            action: S
        }, {
            command: "bounce_player",
            action: O
        }, {
            command: "observe_player",
            action: L
        }, {
            command: "observe_current_player",
            action: k
        }, {
            command: "observe_active_player",
            action: R
        }, {
            command: "observe_all_players",
            action: N
        }, {
            command: "observe_next_player",
            action: N
        }, {
            command: "attach_to_player",
            action: T
        }, {
            command: "springfy_player",
            action: D
        }, {
            command: "roll_player",
            action: P
        }, {
            command: "walk",
            action: A
        }, {
            command: "gravity",
            action: j
        }, {
            command: "jump",
            action: B
        }, {
            command: "move",
            action: C
        }, {
            command: "bullet_trajectory",
            action: C
        }, {
            command: "elliptical_trajectory",
            action: F
        }, {
            command: "mosquito_movement",
            action: H
        }, {
            command: "look_left",
            action: G
        }, {
            command: "look_right",
            action: V
        }, {
            command: "look_at_player",
            action: W
        }, {
            command: "look_at_walking_direction",
            action: U
        }, {
            command: "create_item",
            action: Y
        }, {
            command: "change_closest_object_state",
            action: X
        }, {
            command: "create_child",
            action: K
        }, {
            command: "change_child_state",
            action: z
        }, {
            command: "change_parent_state",
            action: q
        }, {
            command: "destroy",
            action: $
        }, {
            command: "change_state",
            action: Q
        }, {
            command: "on_timeout",
            action: J
        }, {
            command: "on_collision",
            action: Z
        }, {
            command: "on_animation_finished",
            action: ee
        }, {
            command: "on_random_event",
            action: te
        }, {
            command: "on_player_collision",
            action: ne
        }, {
            command: "on_player_attack",
            action: oe
        }, {
            command: "on_player_rect_collision",
            action: ae
        }, {
            command: "on_no_shield",
            action: ie
        }, {
            command: "on_shield",
            action: re
        }, {
            command: "on_fire_shield",
            action: _e
        }, {
            command: "on_thunder_shield",
            action: se
        }, {
            command: "on_water_shield",
            action: ce
        }, {
            command: "on_acid_shield",
            action: de
        }, {
            command: "on_wind_shield",
            action: le
        }, {
            command: "on_brick_collision",
            action: ue
        }, {
            command: "on_floor_collision",
            action: pe
        }, {
            command: "on_ceiling_collision",
            action: fe
        }, {
            command: "on_left_wall_collision",
            action: ge
        }, {
            command: "on_right_wall_collision",
            action: ve
        }, {
            command: "show_dialog_box",
            action: me
        }, {
            command: "hide_dialog_box",
            action: he
        }, {
            command: "clear_level",
            action: be
        }, {
            command: "play_sample",
            action: ye
        }, {
            command: "play_music",
            action: Ie
        }, {
            command: "play_level_music",
            action: Ee
        }, {
            command: "set_music_volume",
            action: xe
        }, {
            command: null,
            action: null
        }];
    t.object_compiler_compile = function(e, t) {
        return e = o(t, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.objectbasicmachine_new = void 0;
    var o = n(2),
        a = n(1),
        i = (t.objectbasicmachine_new = function(e) {
            var t = {},
                n = t;
            return n.init = i, n.release = r, n.update = _, n.render = s, n.get_object_instance = c, n.basic = !0, t.object = e, n
        }, function(e) {}),
        r = function(e) {
            null
        },
        _ = function(e, t, n, o, a, i) {},
        s = function(e, t) {
            var n = e.get_object_instance(e).actor,
                i = n.position;
            n.position = (0, o.v2d_new)(parseInt(n.position.x, 10), parseInt(n.position.y, 10)), (0, a.actor_render)(n, t), n.position = i
        },
        c = function(e) {
            return e.object
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.bullettrajectory_new = void 0;
    var o = n(20),
        a = n(2),
        i = n(3),
        r = (t.bullettrajectory_new = function(e, t, n) {
            var i = {};
            return i.init = r, i.release = _, i.update = s, i.render = c, i.get_object_instance = o.get_object_instance, i.decorated_machine = e, i.speed = (0, a.v2d_new)(t, n), i
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        }),
        _ = function(e) {},
        s = function(e, t, n, o, r, _) {
            var s = e,
                c = s.decorated_machine,
                d = e,
                l = e.get_object_instance(e),
                u = (0, i.timer_get_delta)(),
                p = void 0;
            p = (0, a.v2d_multiply)(d.speed, u), l.actor.position = (0, a.v2d_add)(l.actor.position, p), c.update(c, t, n, o, r, _)
        },
        c = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ellipticaltrajectory_new = void 0;
    var o = n(20),
        a = n(4),
        i = n(3),
        r = n(1),
        _ = n(23),
        s = (t.ellipticaltrajectory_new = function(e, t, n, i, r, _, u) {
            var p = {};
            return p.init = s, p.release = c, p.update = d, p.render = l, p.get_object_instance = o.get_object_instance, p.decorated_machine = e, p.amplitude_x = t, p.amplitude_y = n, p.angularspeed_x = i * (2 * a.PI), p.angularspeed_y = r * (2 * a.PI), p.initialphase_x = _ * a.PI / 180, p.initialphase_y = u * a.PI / 180, p
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        }),
        c = function(e) {},
        d = function(e, t, n, o, a, s) {
            var c = e,
                d = c.decorated_machine,
                l = e,
                u = e.get_object_instance(e),
                p = u.actor,
                f = (0, i.timer_get_delta)(),
                g = null,
                v = null,
                m = null,
                h = null,
                b = null,
                y = null,
                I = null,
                E = null,
                x = 0,
                w = 0,
                S = .001 * (0, i.timer_get_ticks)(),
                O = p.position;
            p.position.x += -l.amplitude_x * l.angularspeed_x * Math.sin(l.initialphase_x + l.angularspeed_x * S) * f, p.position.y += l.amplitude_y * l.angularspeed_y * Math.cos(l.initialphase_y + l.angularspeed_y * S) * f;
            var L = (0, r.actor_corners)(p, x, w, o, g, v, m, h, b, y, I, E);
            g = L.up, v = L.upright, m = L.right, h = L.downright, b = L.down, y = L.downleft, I = L.left, E = L.upleft;
            var k = (0, r.actor_handle_clouds)(p, w, g, v, m, h, b, y, I, E);
            g = k.up, v = k.upright, m = k.right, h = k.downright, b = k.down, y = k.downleft, I = k.left, E = k.upleft, null != m && p.position.x > O.x && (p.position.x = p.hot_spot.x - (0, r.actor_image)(p).width + m.x), null != I && p.position.x < O.x && (p.position.x = p.hot_spot.x + I.x + (0, _.brick_image)(I).width), null != b && p.position.y > O.y && (p.position.y = p.hot_spot.y - (0, r.actor_image)(p).height + b.y), null != g && p.position.y < O.y && (p.position.y = p.hot_spot.y + g.y + (0, _.brick_image)(g).height), d.update(d, t, n, o, a, s)
        },
        l = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.enemy_new = void 0;
    var o = n(20),
        a = n(2),
        i = n(5),
        r = n(6),
        _ = n(16),
        s = n(1),
        c = n(11),
        d = n(7),
        l = (t.enemy_new = function(e, t) {
            var n = {};
            return n.init = l, n.release = u, n.update = p, n.render = f, n.get_object_instance = o.get_object_instance, n.decorated_machine = e, n.score = t, n
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n && n.init(n)
        }),
        u = function(e) {},
        p = function(e, t, n, o, l, u) {
            var p = e,
                f = p.decorated_machine,
                g = e,
                v = e.get_object_instance(e),
                m = void 0;
            for (m = 0; m < n; m++) {
                var h = t[m];
                h && (0, s.actor_pixelperfect_collision)(v.actor, h.actor) && ((0, _.player_attacking)(h) || h.invincible ? (h.actor.is_jumping && (0, _.player_bounce)(h), (0, d.level_add_to_score)(g.score), (0, d.level_create_item)(c.IT_EXPLOSION, (0, a.v2d_add)(v.actor.position, (0, a.v2d_new)(0, -15))), (0, d.level_create_animal)(v.actor.position), (0, i.sound_play)((0, r.soundfactory_get)("destroy")), v.state = c.ES_DEAD) : h.hit(h))
            }
            f && f.update(f, t, n, o, l, u)
        },
        f = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.gravity_new = void 0;
    var o = n(20),
        a = n(1),
        i = n(7),
        r = (t.gravity_new = function(e) {
            var t = {},
                n = t;
            return t.init = r, t.release = _, t.update = s, t.render = c, t.get_object_instance = o.get_object_instance, n.decorated_machine = e, t
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        }),
        _ = function(e) {},
        s = function(e, t, n, o, r, _) {
            var s = e,
                c = s.decorated_machine,
                d = e.get_object_instance(e),
                l = d.actor;
            (0, a.actor_move)(l, (0, a.actor_platform_movement)(l, o, (0, i.level_gravity)())), c.update(c, t, n, o, r, _)
        },
        c = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.lookatwalkingdirection_new = t.lookatplayer_new = t.lookright_new = t.lookleft_new = void 0;
    var o = n(20),
        a = n(4),
        i = n(24),
        r = (t.lookleft_new = function(e, t) {
            return r(e, l)
        }, t.lookright_new = function(e, t) {
            return r(e, u)
        }, t.lookatplayer_new = function(e, t) {
            return r(e, p)
        }, t.lookatwalkingdirection_new = function(e, t) {
            return r(e, f)
        }, function(e, t) {
            var n = {};
            return n.init = _, n.release = s, n.update = c, n.render = d, n.get_object_instance = o.get_object_instance, n.decorated_machine = e, n.look_strategy = t, n
        }),
        _ = function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        },
        s = function(e) {},
        c = function(e, t, n, o, a, i) {
            var r = e,
                _ = r.decorated_machine,
                s = e;
            t[0] && s.look_strategy(s, t[0]), _.update(_, t, n, o, a, i)
        },
        d = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        },
        l = function(e) {
            var t = e;
            t.get_object_instance(t).actor.mirror &= ~a.IF_HFLIP
        },
        u = function(e) {
            var t = e;
            t.get_object_instance(t).actor.mirror |= a.IF_HFLIP
        },
        p = function(e) {
            var t = e,
                n = t.get_object_instance(t),
                o = (0, i.enemy_get_observed_player)(n);
            o && (n.actor.position.x < o.actor.position.x ? n.actor.mirror &= ~a.IF_HFLIP : n.actor.mirror |= a.IF_HFLIP)
        },
        f = function(e) {
            var t = e,
                n = t.get_object_instance(t);
            n.actor.position.x > e.old_x ? n.actor.mirror &= ~a.IF_HFLIP : n.actor.mirror |= a.IF_HFLIP, e.old_x = n.actor.position.x
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mosquitomovement_new = void 0;
    var o = n(20),
        a = n(3),
        i = n(2),
        r = n(24),
        _ = (t.mosquitomovement_new = function(e, t) {
            var n = {};
            return n.init = _, n.release = s, n.update = c, n.render = d, n.get_object_instance = o.get_object_instance, n.decorated_machine = e, n.speed = t, n
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        }),
        s = function(e) {},
        c = function(e, t, n, o, _, s) {
            var c = e,
                d = c.decorated_machine,
                l = e,
                u = e.get_object_instance(e),
                p = (0, r.enemy_get_observed_player)(u);
            if (p) {
                var f = (0, i.v2d_subtract)(p.actor.position, u.actor.position);
                if ((0, i.v2d_magnitude)(f) >= 5) {
                    var g = (0, a.timer_get_delta)(),
                        v = (0, i.v2d_normalize)(f),
                        m = (0, i.v2d_multiply)(v, l.speed * g);
                    u.actor.position = (0, i.v2d_add)(u.actor.position, m)
                }
            }
            d.update(d, t, n, o, _, s)
        },
        d = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setanimation_new = void 0;
    var o = n(20),
        a = n(0),
        i = n(1),
        r = (t.setanimation_new = function(e, t, n) {
            var i = {};
            return i.init = r, i.release = _, i.update = s, i.render = c, i.get_object_instance = o.get_object_instance, i.decorated_machine = e, i.anim = (0, a.sprite_get_animation)(t, n), i
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            d(e), n.init(n)
        }),
        _ = function(e) {},
        s = function(e, t, n, o, a, i) {
            d(e)
        },
        c = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        },
        d = function(e) {
            var t = e,
                n = e.get_object_instance(e);
            (0, i.actor_change_animation)(n.actor, t.anim)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.walk_new = void 0;
    var o = n(20),
        a = n(3),
        i = n(1),
        r = n(23),
        _ = (t.walk_new = function(e, t) {
            var n = {};
            return n.init = _, n.release = s, n.update = c, n.render = d, n.get_object_instance = o.get_object_instance, n.decorated_machine = e, n.speed = t, n.direction = -1, n
        }, function(e) {
            var t = e,
                n = t.decorated_machine;
            n.init(n)
        }),
        s = function(e) {},
        c = function(e, t, n, o, _, s) {
            var c = e,
                d = c.decorated_machine,
                l = e,
                u = e.get_object_instance(e),
                p = u.actor,
                f = (0, a.timer_get_delta)(),
                g = null,
                v = null,
                m = null,
                h = null,
                b = null,
                y = null,
                I = null,
                E = null,
                x = 2,
                w = -2;
            p.position.x += l.direction * l.speed * f;
            var S = (0, i.actor_corners)(p, x, w, o, g, v, m, h, b, y, I, E);
            g = S.up, v = S.upright, m = S.right, h = S.downright, b = S.down, y = S.downleft, I = S.left, E = S.upleft;
            var O = (0, i.actor_handle_clouds)(p, w, g, v, m, h, b, y, I, E);
            g = O.up, v = O.upright, m = O.right, h = O.downright, b = O.down, y = O.downleft, I = O.left, E = O.upleft, null != m && l.direction > 0 && (p.position.x = p.hot_spot.x - (0, i.actor_image)(p).width + m.x, l.direction = -1), null != I && l.direction < 0 && (p.position.x = p.hot_spot.x + I.x + (0, r.brick_image)(I).width, l.direction = 1), null != b && (null == h && null != y ? l.direction = -1 : null == y && null != h && (l.direction = 1)), d.update(d, t, n, o, _, s)
        },
        d = function(e, t) {
            var n = e,
                o = n.decorated_machine;
            o.render(o, t)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.credits_release = t.credits_render = t.credits_update = t.credits_init = void 0;
    var o = n(2),
        a = n(4),
        i = n(10),
        r = n(5),
        _ = n(18),
        s = n(13),
        c = n(12),
        d = n(3),
        l = n(14),
        u = n(6),
        p = n(15),
        f = n(21),
        g = ["<color=ffff00>$CREDITS_ENGINE</color>\n\n", "<color=ffff00>$CREDITS_ACTIVE</color>\n\n", "Alexandre Martins:\n$CREDITS_ALEXANDRE\n\n", "Di Rodrigues:\n$CREDITS_DI\n\n", "Colin:\n$CREDITS_COLIN\n\n", "Mateus Reis:\n$CREDITS_MATEUSREIS\n\n", "Christopher Martinus:\n$CREDITS_CHRISTOPHER\n\n", "Celdecea:\n$CREDITS_CELDECEA\n\n", "Christian Zigotzky:\n$CREDITS_XENO\n\n", "Joepotato28:\n$CREDITS_JOE\n\n", "Arthur Blot:\n$CREDITS_ARTHURBLOT\n\n", "Reimund Renner:\n$CREDITS_REIMUND\n\n", "Szymon Weihs:\n$CREDITS_SZYMON\n\n", "Tomires:\n$CREDITS_TOMIRES\n\n", "Sascha de waal:\n$CREDITS_SSDW\n\n", "Francesco Sciusco:\n$CREDITS_FRANCESCO\n\n", "<color=ffff00>$CREDITS_THANKS</color>\n\n", "SourceForge.net\n", "allegro.cc\n", "OpenGameArt.org\n", "GagaGames.com.br\n", "Rsonist88\n", "PlayDeb.net\n\n", "<color=ffff00>$CREDITS_RETIRED</color>\n\n", "Neoblast:\n$CREDITS_NEOBLAST\n\n", "Bastian von Halem:\n$CREDITS_BASTIAN\n\n", "Lainz:\n$CREDITS_LAINZ\n\n", "Jogait:\n$CREDITS_JOGAIT\n\n"],
        v = "data/themes/credits.bg.json",
        m = "data/music/options.mp4",
        h = void 0,
        b = void 0,
        y = void 0,
        I = void 0,
        E = void 0,
        x = void 0,
        w = void 0,
        S = void 0;
    t.credits_init = function() {
        b = !1, x = (0, s.input_create_user)(), y = (0, p.font_create)(4), (0, p.font_set_text)(y, (0, _.lang_get)("CREDITS_TITLE")), y.position.x = i.VIDEO_SCREEN_W / 2 - 100, y.position.y = 5, E = (0, p.font_create)(8), (0, p.font_set_text)(E, (0, _.lang_get)("CREDITS_KEY")), E.position.x = 10, E.position.y = i.VIDEO_SCREEN_H - (0, p.font_get_charsize)(E).y - 5, I = (0, p.font_create)(8);
        for (var e = 0; e < g.length; e++) {
            var t = g[e],
                n = t.match(/\$[A-Z_\d]\w+/m);
            if (n) {
                for (var o = 0; o < n.length; o++) {
                    var a = n[o].slice(1),
                        r = (0, _.lang_get)(a);
                    r && (t = t.replace("$" + a, r))
                }
                g[e] = t
            }
        }
        g = g.join(""), (0, p.font_set_text)(I, g, "%s"), (0, p.font_set_width)(I, 300), I.position.x = 10, I.position.y = i.VIDEO_SCREEN_H, w = 1;
        for (var d = (0, p.font_get_text)(I), l = 0; l < d.length; l++) "\n" == d[l] && w++;
        w += 10, h = (0, c.image_create)(i.VIDEO_SCREEN_W, 30), S = (0, f.background_load)(v).then(function(e) {
            S = e, (0, i.video_fadefx_in)((0, c.image_rgb)(0, 0, 0), 1)
        }), (0, i.video_fadefx_in)((0, c.image_rgb)(0, 0, 0), 1)
    }, t.credits_update = function() {
        var e = (0, d.timer_get_delta)();
        if ((0, f.background_update)(S), I.position.y -= 3 * (0, p.font_get_charsize)(I).y * e, I.position.y < -(w * ((0, p.font_get_charsize)(I).y + (0, p.font_get_charspacing)(I).y)) && (I.position.y = i.VIDEO_SCREEN_H), b || (0, i.video_fadefx_is_fading)() || ((0, s.input_button_pressed)(x, s.IB_FIRE3) ? ((0, r.sound_play)((0, u.soundfactory_get)("select")), b = !0) : (0, s.input_button_pressed)(x, s.IB_FIRE4) && ((0, r.sound_play)((0, u.soundfactory_get)("return")), b = !0)), !(0, r.music_is_playing)()) {
            var t = music_load(m);
            (0, r.music_play)(t, a.INFINITY)
        }
        if (b) {
            if ((0, i.video_fadefx_over)()) return void(0, l.scenestack_pop)();
            (0, i.video_fadefx_out)((0, c.image_rgb)(0, 0, 0), 1)
        }
    }, t.credits_render = function() {
        (0, i.video_clearDisplay)();
        var e = (0, o.v2d_new)(i.VIDEO_SCREEN_W / 2, i.VIDEO_SCREEN_H / 2);
        (0, f.background_render_bg)(S, e), (0, f.background_render_fg)(S, e), (0, p.font_render)(I, e), (0, i.video_get_backbuffer)().fillRect(0, 0, h.width, h.height), (0, i.video_get_backbuffer)().fillRect(0, i.VIDEO_SCREEN_H - 20, h.width, h.height), (0, p.font_render)(y, e), (0, p.font_render)(E, e)
    }, t.credits_release = function() {
        S = (0, f.background_unload)(S), (0, c.image_destroy)(h), (0, p.font_destroy)(y), (0, p.font_destroy)(I), (0, p.font_destroy)(E), (0, s.input_destroy)(x)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.editor_want_to_activate = t.editor_is_enabled = t.editor_render = t.editor_update = t.editor_disable = t.editor_enable = t.editor_release = t.editor_init = void 0;
    var o = n(5),
        a = n(6),
        i = n(4),
        r = n(12),
        _ = n(13),
        s = n(8),
        c = n(0),
        d = n(3),
        l = n(9),
        u = n(2),
        p = n(10),
        f = n(1),
        g = n(23),
        v = n(30),
        m = n(24),
        h = n(15),
        b = n(11),
        y = n(84),
        I = n(7),
        E = "data/images/editorbg.png",
        x = 1,
        w = 2,
        S = 3,
        O = 4,
        L = !1,
        k = [_.KEY_UP, _.KEY_DOWN, _.KEY_RIGHT, _.KEY_LEFT, _.KEY_N, _.KEY_B, _.KEY_LCONTROL, _.KEY_F12],
        R = [_.KEY_W, _.KEY_S, _.KEY_D, _.KEY_A, _.KEY_Z, _.KEY_Y, _.KEY_G, _.KEY_P],
        N = void 0,
        T = void 0,
        D = void 0,
        P = void 0,
        M = void 0,
        A = void 0,
        j = {},
        B = {},
        C = void 0,
        F = 0,
        H = 0,
        G = void 0,
        V = void 0,
        W = [b.IT_RING, b.IT_LIFEBOX, b.IT_RINGBOX, b.IT_STARBOX, b.IT_SPEEDBOX, b.IT_GLASSESBOX, b.IT_TRAPBOX, b.IT_SHIELDBOX, b.IT_FIRESHIELDBOX, b.IT_THUNDERSHIELDBOX, b.IT_WATERSHIELDBOX, b.IT_ACIDSHIELDBOX, b.IT_WINDSHIELDBOX, b.IT_LOOPRIGHT, b.IT_LOOPMIDDLE, b.IT_LOOPLEFT, b.IT_LOOPNONE, b.IT_YELLOWSPRING, b.IT_BYELLOWSPRING, b.IT_RYELLOWSPRING, b.IT_LYELLOWSPRING, b.IT_TRYELLOWSPRING, b.IT_TLYELLOWSPRING, b.IT_BRYELLOWSPRING, b.IT_BLYELLOWSPRING, b.IT_REDSPRING, b.IT_BREDSPRING, b.IT_RREDSPRING, b.IT_LREDSPRING, b.IT_TRREDSPRING, b.IT_TLREDSPRING, b.IT_BRREDSPRING, b.IT_BLREDSPRING, b.IT_BLUESPRING, b.IT_BBLUESPRING, b.IT_RBLUESPRING, b.IT_LBLUESPRING, b.IT_TRBLUESPRING, b.IT_TLBLUESPRING, b.IT_BRBLUESPRING, b.IT_BLBLUESPRING, b.IT_BLUERING, b.IT_SWITCH, b.IT_DOOR, b.IT_TELEPORTER, b.IT_BIGRING, b.IT_CHECKPOINT, b.IT_GOAL, b.IT_ENDSIGN, b.IT_ENDLEVEL, b.IT_LOOPFLOOR, b.IT_LOOPFLOORNONE, b.IT_LOOPFLOORTOP, b.IT_BUMPER, b.IT_DANGER, b.IT_VDANGER, b.IT_FIREDANGER, b.IT_VFIREDANGER, b.IT_SPIKES, b.IT_CEILSPIKES, b.IT_LWSPIKES, b.IT_RWSPIKES, b.IT_PERSPIKES, b.IT_PERCEILSPIKES, b.IT_PERLWSPIKES, b.IT_PERRWSPIKES, b.IT_DNADOOR, b.IT_DNADOORNEON, b.IT_DNADOORCHARGE, b.IT_HDNADOOR, b.IT_HDNADOORNEON, b.IT_HDNADOORCHARGE, -1],
        U = void 0,
        Y = void 0,
        X = void 0,
        K = 1,
        z = 2,
        q = 3,
        $ = 4,
        Q = void 0,
        J = void 0,
        Z = void 0,
        ee = 1,
        te = 1,
        ne = 0,
        oe = void 0,
        ae = (t.editor_init = function() {
            (0, s.logfile_message)("editor_init()"), oe = (0, I.level_get_brick_list)(), L = !1, U = W.length, C = x, F = 0, N = (0, p.video_get_resolution)(), T = (0, p.video_is_smooth)(), Y = (0, m.enemy_get_list_of_names)(X), D = (0, r.image_load)(E), M = (0, _.input_create_keyboard)(k), A = (0, _.input_create_keyboard)(R), P = (0, _.input_create_mouse)(), G = (0, h.font_create)(8), V = (0, h.font_create)(8), (0, y.editorgrp_init)(), he(), (0, s.logfile_message)("editor_init() ok")
        }, t.editor_release = function() {
            (0, s.logfile_message)("editor_release()"), be(), (0, y.editorgrp_release)(), (0, _.input_destroy)(A), (0, _.input_destroy)(M), (0, _.input_destroy)(P), (0, h.font_destroy)(V), (0, h.font_destroy)(G), L = !1, C = w, F = 0, (0, s.logfile_message)("editor_release() ok")
        }, t.editor_enable = function() {
            (0, s.logfile_message)("editor_enable()"), Se(), L = !0, j.x = parseInt((0, v.camera_get_position)().x, 10), j.y = parseInt((0, v.camera_get_position)().y, 10), B = (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2), N = (0, p.video_get_resolution)(), T = (0, p.video_is_smooth)(), (0, p.video_changemode)(p.VIDEORESOLUTION_EDT, !1, (0, p.video_is_fullscreen)()), (0, s.logfile_message)("editor_enable() ok")
        }, t.editor_disable = function() {
            (0, s.logfile_message)("editor_disable()"), Oe(), L = !1, (0, p.video_changemode)(N, T, (0, p.video_is_fullscreen)()), (0, s.logfile_message)("editor_disable() ok")
        }),
        ie = (t.editor_update = function() {
            oe || (oe = (0, I.level_get_brick_list)());
            var e = (0, c.sprite_get_image)((0, c.sprite_get_animation)("SD_ARROW", 0), 0),
                t = (0, h.font_get_charsize)(G).x,
                n = (0, h.font_get_charsize)(G).y,
                o = void 0,
                a = !1,
                i = (0, u.v2d_subtract)(j, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2));
            if ((0, _.input_button_down)(M, _.IB_FIRE3) && (0, _.input_button_pressed)(M, _.IB_FIRE4) && ie(), (0, _.input_button_down)(M, _.IB_FIRE4)) return void ae();
            if ((0, _.input_button_down)(M, _.IB_FIRE3) ? (((0, _.input_button_pressed)(M, _.IB_FIRE1) || (0, _.input_button_pressed)(P, _.IB_DOWN)) && de(), ((0, _.input_button_pressed)(M, _.IB_FIRE2) || (0, _.input_button_pressed)(P, _.IB_UP)) && le()) : (((0, _.input_button_pressed)(M, _.IB_FIRE1) || (0, _.input_button_pressed)(P, _.IB_DOWN)) && ue(), ((0, _.input_button_pressed)(M, _.IB_FIRE2) || (0, _.input_button_pressed)(P, _.IB_UP)) && pe()), B.x = (0, l.clip)((0, _.input_get_xy)(P).x, 0, p.VIDEO_SCREEN_W - e.width), B.y = (0, l.clip)((0, _.input_get_xy)(P).y, 0, p.VIDEO_SCREEN_H - e.height), (0, _.input_button_pressed)(P, _.IB_FIRE1) && (0, _.input_button_down)(M, _.IB_FIRE3)) {
                var r = Ee(B),
                    s = we(!0, r, spawn_point);
                Te(s), Le(s)
            }
            if ((0, _.input_button_pressed)(P, _.IB_FIRE1) && !(0, _.input_button_down)(M, _.IB_FIRE3)) {
                var d = xe(!0, C, F, Ee(B));
                Te(d), Le(d)
            }
            if (o = (0, _.input_button_pressed)(P, _.IB_FIRE3), a = (0, _.input_button_pressed)(P, _.IB_FIRE2), o || a) {
                var g = void 0,
                    v = void 0,
                    m = void 0;
                switch (C) {
                    case x:
                        for (g = oe; g; g = g.next) {
                            var b = [g.data.x, g.data.y, g.data.x + g.data.brick_ref.image.width, g.data.y + g.data.brick_ref.image.height],
                                y = [B.x + i.x, B.y + i.y, B.x + i.x + 1, B.y + i.y + 1];
                            if ((0, l.bounding_box)(b, y)) {
                                if (!o) {
                                    var E = xe(!1, x, (0, I.level_get_brick_id)(g.data), (0, u.v2d_new)(g.data.x, g.data.y));
                                    Te(E), Le(E);
                                    break
                                }
                                F = (0, I.level_get_brick_id)(g.data)
                            }
                        }
                        break;
                    case w:
                        for (v = item_list; v; v = v.next) {
                            var L = [v.data.actor.position.x - v.data.actor.hot_spot.x, v.data.actor.position.y - v.data.actor.hot_spot.y, v.data.actor.position.x - v.data.actor.hot_spot.x + (0, f.actor_image)(v.data.actor).width, v.data.actor.position.y - v.data.actor.hot_spot.y + (0, f.actor_image)(v.data.actor).height],
                                k = [B.x + i.x, B.y + i.y, B.x + i.x + 1, B.y + i.y + 1];
                            if ((0, l.bounding_box)(L, k)) {
                                if (!o) {
                                    var R = xe(!1, w, v.data.type, v.data.actor.position);
                                    Te(R), Le(R);
                                    break
                                }
                                var N = fe(v.data.type);
                                N >= 0 && (H = N, F = W[N])
                            }
                        }
                        break;
                    case S:
                        for (m = enemy_list; m; m = m.next) {
                            var T = [m.data.actor.position.x - m.data.actor.hot_spot.x, m.data.actor.position.y - m.data.actor.hot_spot.y, m.data.actor.position.x - m.data.actor.hot_spot.x + (0, f.actor_image)(m.data.actor).width, m.data.actor.position.y - m.data.actor.hot_spot.y + (0, f.actor_image)(m.data.actor).height],
                                D = [B.x + i.x, B.y + i.y, B.x + i.x + 1, B.y + i.y + 1],
                                U = ve(m.data.name);
                            if (U >= 0 && (0, l.bounding_box)(T, D)) {
                                if (!o) {
                                    var Y = xe(!1, S, U, m.data.actor.position);
                                    Te(Y), Le(Y);
                                    break
                                }
                                F = U
                            }
                        }
                        break;
                    case O:
                }
            }(0, _.input_button_down)(M, _.IB_FIRE3) && ((0, _.input_button_pressed)(A, _.IB_FIRE1) ? Re() : (0, _.input_button_pressed)(A, _.IB_FIRE2) && Ne()), ye(), re(), (0, h.font_set_text)(G, "%d,%d", parseInt(Ee(B).x, 10), parseInt(Ee(B).y, 10)), G.position.x = (0, l.clip)(parseInt(B.x, 10), 10, p.VIDEO_SCREEN_W - t * (0, h.font_get_text)(G).length - 10), G.position.y = (0, l.clip)(parseInt(B.y - 3 * n, 10), 10, p.VIDEO_SCREEN_H - 10), V.position = (0, u.v2d_new)(10, 10), C != S ? (0, h.font_set_text)(V, "<color=ffff00>%s %d</color>\n%s", se(C), F, ce(C, F)) : (0, h.font_set_text)(V, '<color=ffff00>%s "%s"</color>\n%s', se(C), me(F), ce(C, F))
        }, t.editor_render = function() {
            var e = void 0,
                t = (0, u.v2d_subtract)(j, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2));
            _e(), Ie(), (0, I.level_render_entities)(), ge(C, F, (0, u.v2d_subtract)(Ee(B), t)), e = (0, c.sprite_get_image)((0, c.sprite_get_animation)("SD_ARROW", 0), 0), (0, r.image_blit)(e.data, (0, p.video_get_backbuffer)(), e.sx, e.sy, parseInt(B.x, 10), parseInt(B.y, 10), e.width, e.height), (0, h.font_render)(G, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2)), (0, h.font_render)(V, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2))
        }, t.editor_is_enabled = function() {
            return L
        }, t.editor_want_to_activate = function() {
            return (0, _.input_button_pressed)(M, _.IB_FIRE5)
        }, function() {
            var e = (0, I.level_getfile)();
            (0, I.level_save)(e), (0, o.sound_play)((0, a.soundfactory_get)("level saved"))
        }),
        re = function() {
            var e = void 0,
                t = (0, d.timer_get_delta)();
            e = (0, _.input_button_down)(M, _.IB_FIRE3) ? 3750 : 750, ((0, _.input_button_down)(M, _.IB_UP) || (0, _.input_button_down)(A, _.IB_UP)) && (j.y -= e * t), ((0, _.input_button_down)(M, _.IB_DOWN) || (0, _.input_button_down)(A, _.IB_DOWN)) && (j.y += e * t), ((0, _.input_button_down)(M, _.IB_LEFT) || (0, _.input_button_down)(A, _.IB_LEFT)) && (j.x -= e * t), ((0, _.input_button_down)(M, _.IB_RIGHT) || (0, _.input_button_down)(A, _.IB_RIGHT)) && (j.x += e * t), j.x = parseInt(Math.max(j.x, p.VIDEO_SCREEN_W / 2), 10), j.y = parseInt(Math.max(j.y, p.VIDEO_SCREEN_H / 2), 10), (0, v.camera_set_position)(j)
        },
        _e = function() {
            p.VIDEO_SCREEN_W, D.width, p.VIDEO_SCREEN_H, D.height
        },
        se = function(e) {
            switch (e) {
                case x:
                    return "brick";
                case w:
                    return "built-in item";
                case S:
                    return "object";
                case O:
                    return "group"
            }
            return "unknown"
        },
        ce = function(e, t) {
            var n = "",
                o = void 0;
            switch (e) {
                case x:
                    o = (0, g.brick_get)(t);
                    break;
                case w:
                    o = (0, b.item_create)(t), (0, b.item_destroy)(o);
                    break;
                case S:
                    break;
                case O:
            }
            return n
        },
        de = function e() {
            C = C == x ? w : C == w ? S : C == S ? O : C == O ? x : C, F = 0, H = 0, C == O && 0 == (0, y.editorgrp_group_count)() && e(), C == S && 0 == X && e()
        },
        le = function e() {
            C = C == w ? x : C == S ? w : C == O ? S : C == x ? O : C, F = 0, H = 0, C == O && 0 == (0, y.editorgrp_group_count)() && e(), C == S && 0 == X && e()
        },
        ue = function e() {
            var t = void 0;
            switch (C) {
                case x:
                    t = (0, g.brick_size)(), F = (F + 1) % t, null == (0, g.brick_get)(F) && e();
                    break;
                case w:
                    t = U, H = (H + 1) % t, F = W[H];
                    break;
                case S:
                    t = X, F = (F + 1) % t;
                    break;
                case O:
                    t = (0, y.editorgrp_group_count)(), F = (F + 1) % t
            }
        },
        pe = function e() {
            var t = void 0;
            switch (C) {
                case x:
                    t = (0, g.brick_size)(), F = (F - 1 + t) % t, null == (0, g.brick_get)(F) && e();
                    break;
                case w:
                    t = U, H = (H - 1 + t) % t, F = W[H];
                    break;
                case S:
                    t = X, F = (F - 1 + t) % t;
                    break;
                case O:
                    t = (0, y.editorgrp_group_count)(), F = (F - 1 + t) % t
            }
        },
        fe = function(e) {
            var t = void 0;
            for (t = 0; t < U; t++)
                if (e == W[t]) return t;
            return -1
        },
        ge = function e(t, n, o) {
            var a = null,
                i = (0, u.v2d_new)(0, 0);
            switch (t) {
                case x:
                    null != (0, g.brick_get)(n) && (a = (0, g.brick_get)(n).image);
                    break;
                case w:
                    var _ = (0, b.item_create)(n);
                    null != _ && (a = (0, f.actor_image)(_.actor), i = _.actor.hot_spot, i.y -= 2, (0, b.item_destroy)(_));
                    break;
                case S:
                    var s = (0, m.enemy_create)(me(n));
                    null != s && (a = (0, f.actor_image)(s.actor), i = s.actor.hot_spot, i.y -= 2, (0, m.enemy_destroy)(s));
                    break;
                case O:
                    var c = void 0,
                        d = void 0;
                    for (c = (0, y.editorgrp_get_group)(n), d = c; d; d = d.next) {
                        e(EDITORGRP_ENTITY_TO_EDT(d.entity.type), d.entity.id, (0, u.v2d_add)(o, d.entity.position))
                    }
            }
            null != a && (0, r.image_blit)(a.data, (0, p.video_get_backbuffer)(), a.sx, a.sy, parseInt(o.x - i.x, 10), parseInt(o.y - i.y, 10), a.swidth, a.sheight)
        },
        ve = function(e) {
            var t = void 0;
            for (t = 0; t < X; t++)
                if (e == Y[t]) return t;
            return -1
        },
        me = function(e) {
            return null
        },
        he = function() {
            ne = !1
        },
        be = function() {},
        ye = function() {
            (0, _.input_button_pressed)(A, _.IB_FIRE3) && (ne = !ne)
        },
        Ie = function() {
            if (ne) {
                var e = void 0,
                    t = void 0,
                    n = void 0,
                    o = void 0,
                    a = (0, u.v2d_subtract)(j, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2));
                for (n = (0, r.image_create)(ee, te), o = (0, r.image_rgb)(0, 128, 160), (0, r.image_clear)(n, 0, 0, 0), e = 0; e < n.height; e++)(0, r.image_putpixel)(n, (0, p.video_get_backbuffer)(), n.width - 1, e, o);
                for (e = 0; e < n.width; e++)(0, r.image_putpixel)(n, (0, p.video_get_backbuffer)(), e, n.height - 1, o);
                for (e = 0; e <= p.VIDEO_SCREEN_W / ee; e++)
                    for (t = 0; t <= p.VIDEO_SCREEN_H / te; t++) {
                        (0, u.v2d_subtract)(Ee((0, u.v2d_new)(e * n.width, t * n.height)), a)
                    }(0, r.image_destroy)(n)
            }
        },
        Ee = function(e) {
            var t = (0, u.v2d_subtract)(j, (0, u.v2d_new)(p.VIDEO_SCREEN_W / 2, p.VIDEO_SCREEN_H / 2)),
                n = ee,
                o = te,
                a = parseInt(t.x % n, 10),
                i = parseInt(t.y % o, 10),
                r = -a + parseInt(e.x / n, 10) * n,
                _ = -i + parseInt(e.y / o, 10) * o;
            return (0, u.v2d_add)(t, (0, u.v2d_new)(r, _))
        },
        xe = function(e, t, n, o) {
            var a = {};
            return a.type = e ? K : z, a.obj_type = t, a.obj_id = n, a.obj_position = o, a
        },
        we = function(e, t, n) {
            var o = {};
            return o.type = e ? q : $, o.obj_position = t, o.obj_old_position = n, o
        },
        Se = function() {
            J = {}, J.in_group = !1, J.prev = null, J.next = null, Q = J, Z = J
        },
        Oe = function() {
            J = ke(J), Q = null, Z = null
        },
        Le = function e(t) {
            var n = !1,
                o = void 0;
            if (t.obj_type != O) {
                var a = void 0,
                    i = void 0,
                    r = void 0;
                for (r = {}, r.action = t, r.in_group = n, r.in_group && (r.group_key = o), a = Z, null != a && (a.next = ke(a.next)), i = Q; null != i.next;) i = i.next;
                i.next = r, r.prev = i, r.next = null, Z = r
            } else {
                var _ = 48879,
                    s = void 0,
                    c = void 0;
                for (n = !0, o = _++, s = (0, y.editorgrp_get_group)(t.obj_id), c = s; c; c = c.next) {
                    var d = void 0,
                        l = c.entity;
                    d = xe(!0, EDITORGRP_ENTITY_TO_EDT(l.type), l.id, (0, u.v2d_add)(l.position, t.obj_position)), e(d)
                }
                n = !1
            }
        },
        ke = function(e) {
            var t = void 0,
                n = void 0;
            for (t = e; null != t;) n = t.next, t = null, t = n;
            return null
        },
        Re = function e() {
            var t = void 0,
                n = void 0;
            Z != J ? (t = Z, Z = Z.prev, t.in_group && t.prev && t.prev.in_group && t.group_key == t.prev.group_key && e(), n = t.action, n.type = n.type == K ? z : n.type == z ? K : n.type == q ? $ : n.type == $ ? q : n.type, Te(n)) : (0, p.video_showmessage)("Already at oldest change.")
        },
        Ne = function e() {
            var t = void 0,
                n = void 0;
            null != Z.next ? (Z = Z.next, t = Z, t.in_group && t.next && t.next.in_group && t.group_key == t.next.group_key && e(), n = t.action, Te(n)) : (0, p.video_showmessage)("Already at newest change.")
        },
        Te = function e(t) {
            if (t.type == K) switch (t.obj_type) {
                case x:
                    (0, I.level_create_brick)(t.obj_id, t.obj_position);
                    break;
                case w:
                    (0, I.level_create_item)(t.obj_id, t.obj_position);
                    break;
                case S:
                    (0, I.level_create_enemy)(me(t.obj_id), t.obj_position);
                    break;
                case O:
                    var n = void 0,
                        o = void 0;
                    for (n = (0, y.editorgrp_get_group)(t.obj_id), o = n; o; o = o.next) {
                        var a = void 0,
                            r = o.entity;
                        a = xe(!0, EDITORGRP_ENTITY_TO_EDT(r.type), r.id, (0, u.v2d_add)(r.position, t.obj_position)), e(a)
                    }
            } else if (t.type == z) switch (t.obj_type) {
                case x:
                    var _ = void 0,
                        s = (0, g.brick_get)(t.obj_id);
                    for (_ = oe; _; _ = _.next)
                        if (_.data.brick_ref == s) {
                            var c = (0, u.v2d_magnitude)((0, u.v2d_subtract)((0, u.v2d_new)(_.data.x, _.data.y), t.obj_position));
                            c < i.EPSILON && (_.data.state = g.BRS_DEAD)
                        } break;
                case w:
                    var d = void 0,
                        l = t.obj_id;
                    for (d = item_list; d; d = d.next)
                        if (d.data.type == l) {
                            var p = (0, u.v2d_magnitude)((0, u.v2d_subtract)(d.data.actor.position, t.obj_position));
                            p < i.EPSILON && (d.data.state = IS_DEAD)
                        } break;
                case S:
                    var f = void 0,
                        v = t.obj_id;
                    for (f = enemy_list; f; f = f.next)
                        if (ve(f.data.name) == v) {
                            var m = (0, u.v2d_magnitude)((0, u.v2d_subtract)(f.data.actor.position, t.obj_position));
                            m < i.EPSILON && (f.data.state = ES_DEAD)
                        } break;
                case O:
            } else t.type == q ? ((0, I.level_set_spawn_point)(t.obj_position), (0, I.level_spawn_players)()) : t.type == $ && ((0, I.level_set_spawn_point)(t.obj_old_position), (0, I.level_spawn_players)())
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.endofdemo_release = t.endofdemo_render = t.endofdemo_update = t.endofdemo_init = void 0;
    var o = n(4),
        a = n(2),
        i = n(10),
        r = n(12),
        _ = n(0),
        s = n(18),
        c = n(3),
        d = n(14),
        l = n(19),
        u = n(15),
        p = n(1),
        f = 3,
        g = 10,
        v = void 0,
        m = void 0,
        h = void 0,
        b = [];
    t.endofdemo_init = function() {
        var e = void 0;
        for (v = (0, c.timer_get_ticks)(), m = (0, u.font_create)(8), m.position = (0, a.v2d_new)(5, 35), h = (0, u.font_create)(4), (0, u.font_set_text)(h, (0, s.lang_get)("ENDOFDEMO_TITLE")), h.position = (0, a.v2d_new)((i.VIDEO_SCREEN_W - parseInt((0, u.font_get_charsize)(h).x, 10) * (0, u.font_get_text)(h)).length / 2, 5), e = 0; e < g; e++) b[e] = (0, p.actor_create)(), b[e].spawn_point = b[e].position = (0, a.v2d_new)(i.VIDEO_SCREEN_W * e / g + 15, 215), (0, p.actor_change_animation)(b[e], (0, _.sprite_get_animation)(e % 2 == 1 ? "SD_BLUERING" : "SD_RING", 0));
        (0, i.video_fadefx_in)((0, r.image_rgb)(0, 0, 0), 2)
    }, t.endofdemo_update = function() {
        var e = (0, c.timer_get_ticks)(),
            t = void 0,
            n = Math.max(0, (f - parseInt(e - v, 10)) / 1e3);
        if ((0, u.font_set_text)(m, (0, s.lang_get)("ENDOFDEMO_TEXT"), o.GAME_TITLE, o.GAME_WEBSITE, n), e >= v + f) {
            if ((0, i.video_fadefx_over)()) return (0, d.scenestack_pop)(), void(0, d.scenestack_push)((0, l.storyboard_get_scene)(l.SCENE_QUESTOVER));
            (0, i.video_fadefx_out)((0, r.image_rgb)(0, 0, 0), 2)
        }
        for (t = 0; t < g; t++) b[t].position.y = b[t].spawn_point.y + 10 * Math.sin(o.PI * (.001 * e) + 2 * o.PI / g * t)
    }, t.endofdemo_render = function() {
        var e = void 0,
            t = (0, a.v2d_new)(i.VIDEO_SCREEN_W / 2, i.VIDEO_SCREEN_H / 2);
        for ((0, i.video_clearDisplay)(), e = 0; e < g; e++)(0, p.actor_render)(b[e], t);
        (0, u.font_render)(h, t), (0, u.font_render)(m, t)
    }, t.endofdemo_release = function() {
        var e = void 0;
        for (e = 0; e < g; e++)(0, p.actor_destroy)(b[e]);
        (0, u.font_destroy)(h), (0, u.font_destroy)(m)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.gameover_release = t.gameover_render = t.gameover_update = t.gameover_init = void 0;
    var o = n(2),
        a = n(14),
        i = n(12),
        r = n(10),
        _ = n(3),
        s = n(22),
        c = n(15),
        d = [],
        l = void 0,
        u = void 0;
    t.gameover_init = function() {
        u = 0, d[0] = (0, c.font_create)(7), d[0].position = (0, o.v2d_new)(-50, 112), (0, c.font_set_text)(d[0], "GAME"), d[1] = (0, c.font_create)(7), d[1].position = (0, o.v2d_new)(298, 112), (0, c.font_set_text)(d[1], "OVER")
    }, t.gameover_update = function() {
        var e = (0, _.timer_get_delta)();
        if ((u += e) > 5) {
            if ((0, r.video_fadefx_over)()) return (0, s.quest_abort)(), void(0, a.scenestack_pop)();
            (0, r.video_fadefx_out)((0, i.image_rgb)(0, 0, 0), 2)
        }
        d[0].position.x += 200 * e, d[0].position.x > 80 && (d[0].position.x = 80), d[1].position.x -= 200 * e, d[1].position.x < 168 && (d[1].position.x = 168)
    }, t.gameover_render = function() {
        (0, r.video_clearDisplay)();
        var e = (0, o.v2d_new)(r.VIDEO_SCREEN_W / 2, r.VIDEO_SCREEN_H / 2);
        (0, c.font_render)(d[0], e), (0, c.font_render)(d[1], e)
    }, t.gameover_release = function() {
        (0, i.image_destroy)(l), (0, c.font_destroy)(d[1]), (0, c.font_destroy)(d[0]), (0, s.quest_abort)()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.intro_release = t.intro_render = t.intro_update = t.intro_init = void 0;
    var o = n(2),
        a = n(3),
        i = n(14),
        r = n(19),
        _ = n(10),
        s = n(12),
        c = n(21),
        d = "data/themes/intro.bg.json",
        l = 3,
        u = void 0,
        p = void 0;
    t.intro_init = function() {
        u = 0, (0, c.background_load)(d).then(function(e) {
            p = e, (0, _.video_fadefx_in)((0, s.image_rgb)(0, 0, 0), 1)
        })
    }, t.intro_update = function() {
        if (p && (u += (0, a.timer_get_delta)(), (0, c.background_update)(p), u >= l)) {
            if ((0, _.video_fadefx_over)()) return (0, i.scenestack_pop)(), void(0, i.scenestack_push)((0, r.storyboard_get_scene)(r.SCENE_MENU));
            (0, _.video_fadefx_out)((0, s.image_rgb)(0, 0, 0), 1)
        }
    }, t.intro_render = function() {
        if (p) {
            var e = (0, o.v2d_new)(_.VIDEO_SCREEN_W / 2, _.VIDEO_SCREEN_H / 2);
            (0, c.background_render_bg)(p, e), (0, c.background_render_fg)(p, e)
        }
    }, t.intro_release = function() {
        p = null
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.langselect_release = t.langselect_render = t.langselect_update = t.langselect_init = void 0;
    var o = n(4),
        a = n(2),
        i = n(14),
        r = n(25),
        _ = n(8),
        s = n(10),
        c = n(12),
        d = n(0),
        l = n(5),
        u = n(18),
        p = n(13),
        f = n(3),
        g = n(17),
        v = n(6),
        m = n(15),
        h = n(1),
        b = n(21),
        y = ["data/languages/deutsch.json", "data/languages/dutch.json", "data/languages/english.json", "data/languages/francais.json", "data/languages/indonesian.json", "data/languages/italiano.json", "data/languages/polish.json", "data/languages/ptbr.json"],
        I = "data/languages/english.json",
        E = "data/themes/langselect.bg.json",
        x = "data/music/options.mp4",
        w = 8,
        S = void 0,
        O = 1,
        L = void 0,
        k = void 0,
        R = [],
        N = [],
        T = void 0,
        D = void 0,
        P = void 0,
        M = void 0,
        A = void 0,
        j = void 0,
        B = void 0,
        C = (t.langselect_init = function() {
            P = 0, L = !1, j = 0, A = (0, p.input_create_user)(), T = (0, m.font_create)(8), R[0] = (0, m.font_create)(4), (0, m.font_set_text)(R[0], "SELECT YOUR"), R[0].position.x = (s.VIDEO_SCREEN_W - (0, m.font_get_text)(R[0]).length * (0, m.font_get_charsize)(R[0]).x) / 2 - 140, R[0].position.y = 10, R[1] = (0, m.font_create)(4), (0, m.font_set_text)(R[1], "LANGUAGE"), R[1].position.x = (s.VIDEO_SCREEN_W - (0, m.font_get_text)(R[1]).length * (0, m.font_get_charsize)(R[1]).x) / 2 - 120, R[1].position.y = R[0].position.y + (0, m.font_get_charsize)(R[1]).y + 10 + 10, R[2] = (0, m.font_create)(8), (0, m.font_set_text)(R[2], (0, u.lang_get)("MENU_CQ_BACK")), R[2].position.x = 10, R[2].position.y = s.VIDEO_SCREEN_H - 1.5 * (0, m.font_get_charsize)(R[2]).y, B = (0, b.background_load)(E).then(function(e) {
                B = e, (0, s.video_fadefx_in)((0, c.image_rgb)(0, 0, 0), 1)
            }), M = (0, h.actor_create)(), (0, h.actor_change_animation)(M, (0, d.sprite_get_animation)("SD_TITLEFOOT", 0)), F(), (0, s.video_fadefx_in)((0, c.image_rgb)(0, 0, 0), 1)
        }, t.langselect_update = function() {
            if (j += (0, f.timer_get_delta)(), (0, b.background_update)(B), M && N.length && (M.position = (0, a.v2d_new)(N[0][P].position.x, N[0][P].position.y), M.position.x -= 15, M.position.x += 5 * Math.cos(2 * o.PI * j)), !L && !(0, s.video_fadefx_is_fading)()) {
                if ((0, p.input_button_pressed)(A, p.IB_DOWN) && (P = (P + 1) % k, (0, l.sound_play)((0, v.soundfactory_get)("choose"))), (0, p.input_button_pressed)(A, p.IB_UP) && (P = ((P - 1) % k + k) % k, (0, l.sound_play)((0, v.soundfactory_get)("choose"))), (0, p.input_button_pressed)(A, p.IB_FIRE1) || (0, p.input_button_pressed)(A, p.IB_FIRE3)) {
                    if (!D) return;
                    var e = D[P].filepath;
                    (0, _.logfile_message)('Loading language "%s", "%s"', D[P].title, e), (0, u.lang_loadfile)(I), (0, u.lang_loadfile)(e), C(e), (0, l.sound_play)((0, v.soundfactory_get)("select"))
                }(0, p.input_button_pressed)(A, p.IB_FIRE4) && ((0, l.sound_play)((0, v.soundfactory_get)("return")), L = !0)
            }
            if (S = Math.floor(1 + P / w), O = Math.floor(1 + Math.max(0, k - 1) / w), (0, m.font_set_text)(T, "page %d/%d", S, O), T.position.x = s.VIDEO_SCREEN_W - (0, m.font_get_text)(T).length * (0, m.font_get_charsize)(T).x - 10, T.position.y = s.VIDEO_SCREEN_H - (0, m.font_get_charsize)(T).y - 3, !(0, l.music_is_playing)()) {
                var t = (0, l.music_load)(x);
                (0, l.music_play)(t, o.INFINITY)
            }
            if (L) {
                if ((0, s.video_fadefx_over)()) return void(0, i.scenestack_pop)();
                (0, s.video_fadefx_out)((0, c.image_rgb)(0, 0, 0), 1)
            }
        }, t.langselect_render = function() {
            var e = void 0,
                t = (0, a.v2d_new)(s.VIDEO_SCREEN_W / 2, s.VIDEO_SCREEN_H / 2);
            for ((0, s.video_clearDisplay)(), (0, b.background_render_bg)(B, t), (0, b.background_render_fg)(B, t), (0, m.font_render)(R[0], t), (0, m.font_render)(R[1], t), (0, m.font_render)(R[2], t), O > 1 && (0, m.font_render)(T, t), e = (S - 1) * w; e < S * w; e++) y[e] && N.length > 1 && (0, m.font_render)(N[P == e ? 1 : 0][e], t);
            (0, h.actor_render)(M, t)
        }, t.langselect_release = function() {
            H(), B = (0, b.background_unload)(B), (0, h.actor_destroy)(M), (0, m.font_destroy)(R[0]), (0, m.font_destroy)(R[1]), (0, m.font_destroy)(T), (0, p.input_destroy)(A)
        }, function(e) {
            (0, r.preferences_set_language)(e)
        }),
        F = function() {
            (0, _.logfile_message)("load_lang_list()"), (0, g.resourcemanager_getJsonFiles)(y).then(function(e) {
                D = e, k = D.length, N[0] = [], N[1] = [];
                for (var t = 0; t < k; t++) D[t].filepath = y[t], N[0][t] = (0, m.font_create)(8), N[1][t] = (0, m.font_create)(8), (0, m.font_set_text)(N[0][t], D[t].LANG_LANGUAGE), (0, m.font_set_text)(N[1][t], D[t].LANG_LANGUAGE), N[0][t].position = (0, a.v2d_new)(25, 75 + t % w * 20), N[1][t].position = (0, a.v2d_new)(25, 75 + t % w * 20)
            })
        },
        H = function() {
            var e = void 0;
            for ((0, _.logfile_message)("unload_lang_list()"), e = 0; e < k; e++)(0, m.font_destroy)(N[0][e]), (0, m.font_destroy)(N[1][e]);
            N[0] = null, N[1] = null, D = null, k = 0
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.menu_release = t.menu_render = t.menu_update = t.menu_init = void 0;
    var o = n(22),
        a = n(29),
        i = n(14),
        r = n(19),
        _ = n(4),
        s = n(2),
        c = n(13),
        d = n(10),
        l = n(12),
        u = n(5),
        p = n(3),
        f = n(18),
        g = n(6),
        v = n(0),
        m = n(1),
        h = n(15),
        b = n(21),
        y = "data/music/title.mp4",
        I = "data/themes/menu.bg.json",
        E = ["data/quests/default.json", "data/quests/extra.json", "data/quests/superbosses.json", "data/quests/tutorial.json"],
        x = 0,
        w = 1,
        S = void 0,
        O = void 0,
        L = void 0,
        k = void 0,
        R = 3,
        N = void 0,
        T = void 0,
        D = void 0,
        P = void 0,
        M = void 0,
        A = void 0,
        j = void 0,
        B = void 0,
        C = void 0,
        F = void 0,
        H = void 0,
        G = void 0,
        V = void 0,
        W = 14,
        U = void 0,
        Y = 1,
        X = [],
        K = void 0,
        z = void 0,
        q = void 0,
        $ = [],
        Q = void 0,
        J = void 0,
        Z = (t.menu_init = function() {
            var e = void 0,
                t = void 0;
            for (V = !1, S = x, N = .001 * (0, p.timer_get_ticks)(), T = !1, L = null, O = (0, c.input_create_user)(), (0, c.input_ignore)(O), ee(), J = (0, u.music_load)(y), (0, u.music_play)(J, !0), k = (0, b.background_load)(I).then(function(e) {
                    k = e, (0, d.video_fadefx_in)((0, l.image_rgb)(0, 0, 0), 1)
                }), j = !0, B = (0, m.actor_create)(), B = (0, m.actor_change_animation)(B, (0, v.sprite_get_animation)("SD_TITLESURGE", 0)), B.position.x = (d.VIDEO_SCREEN_W - (0, m.actor_image)(B).width) / 2 + 5, B.position.y = -15, C = (0, m.actor_create)(), C = (0, m.actor_change_animation)(C, (0, v.sprite_get_animation)("SD_TITLEBG", 0)), C.position.x = (d.VIDEO_SCREEN_W - (0, m.actor_image)(C).width) / 2, C.position.y = B.position.y + 25, F = (0, m.actor_create)(), F = (0, m.actor_change_animation)(F, (0, v.sprite_get_animation)("SD_TITLEGAMENAME", 0)), F.position.x = (d.VIDEO_SCREEN_W - (0, m.actor_image)(F).width) / 2, F.position.y = B.position.y + (0, m.actor_image)(B).height - 9, H = (0, h.font_create)(8), H.position = (0, s.v2d_new)(3, d.VIDEO_SCREEN_H - 12), (0, h.font_set_text)(H, "%s", _.GAME_WEBSITE), G = (0, h.font_create)(0), G.position = (0, s.v2d_new)(d.VIDEO_SCREEN_W - 75, 3), (0, h.font_set_text)(G, "V%d.%d.%d", _.GAME_VERSION, _.GAME_SUB_VERSION, _.GAME_WIP_VERSION), P = 0, A = (0, m.actor_create)(), A = (0, m.actor_change_animation)(A, (0, v.sprite_get_animation)("SD_TITLEFOOT", 0)), D = [], D[0] = (0, f.lang_getstring)("MENU_1PGAME"), D[1] = (0, f.lang_getstring)("MENU_TUTORIAL"), D[2] = (0, f.lang_getstring)("MENU_CUSTOMQUESTS"), D[3] = (0, f.lang_getstring)("MENU_OPTIONS"), R = D.length, M = [], e = 0; e < 2; e++)
                for (t = 0; t < R; t++) M[t] || (M[t] = []), M[t][e] = (0, h.font_create)(e), M[t][e].position = (0, s.v2d_new)(d.VIDEO_SCREEN_W / 2 - (0, m.actor_image)(C).width / 5, F.position.y + 65 + 10 * t), (0, h.font_set_text)(M[t][e], D[t]);
            X[0] = (0, h.font_create)(8), X[0].position = (0, s.v2d_new)(5, 3), X[1] = (0, h.font_create)(8), X[1].position = (0, s.v2d_new)(5, d.VIDEO_SCREEN_H - 13), K = (0, h.font_create)(8), K.position = (0, s.v2d_new)(5, 170), (0, d.video_fadefx_in)((0, l.image_rgb)(0, 0, 0), 1.5)
        }, t.menu_update = function() {
            var e = void 0,
                t = .001 * (0, p.timer_get_ticks)();
            if (null != L && (0, d.video_fadefx_over)()) return (0, i.scenestack_pop)(), void(0, i.scenestack_push)(L);
            switch (t <= N + 2 ? (0, c.input_ignore)(O) : T || ((0, c.input_restore)(O), T = !0), (0, b.background_update)(k), S) {
                case x:
                    j && (0, m.actor_animation_finished)(B) && (j = !1, B = (0, m.actor_change_animation)(B, (0, v.sprite_get_animation)("SD_TITLESURGE", 1)), (0, c.input_restore)(O)), F.visible = !j, A.position.x = M[P][0].position.x - 20 + 3 * Math.cos(2 * _.PI * t), A.position.y = M[P][0].position.y, (0, c.input_button_pressed)(O, c.IB_UP) && ((0, u.sound_play)((0, g.soundfactory_get)("choose")), P--), (0, c.input_button_pressed)(O, c.IB_DOWN) && ((0, u.sound_play)((0, g.soundfactory_get)("choose")), P++), P = (P % R + R) % R, ((0, c.input_button_pressed)(O, c.IB_FIRE1) || (0, c.input_button_pressed)(O, c.IB_FIRE3)) && ((0, u.sound_play)((0, g.soundfactory_get)("select")), Z(P));
                    break;
                case w:
                    for ((0, c.input_button_pressed)(O, c.IB_FIRE4) && ((0, u.sound_play)((0, g.soundfactory_get)("return")), S = x), e = 0; e < q; e++) $[e].position = (0, s.v2d_new)(30, 20 + e % W * 10), $[e].visible = te(e) == te(z);
                    if (A.position.x = 10, A.position.y = $[z].position.y, (0, c.input_button_pressed)(O, c.IB_UP) && ((0, u.sound_play)((0, g.soundfactory_get)("choose")), z--), (0, c.input_button_pressed)(O, c.IB_DOWN) && ((0, u.sound_play)((0, g.soundfactory_get)("choose")), z++), z = (z % q + q) % q, (0, h.font_set_text)(X[0], (0, f.lang_get)("MENU_CQ_SELECT"), te(z), ne()), (0, h.font_set_text)(X[1], (0, f.lang_get)("MENU_CQ_BACK")), (0, h.font_set_text)(K, (0, f.lang_get)("MENU_CQ_INFO"), Q[z].version, Q[z].name, Q[z].author, Q[z].description), (0, c.input_button_pressed)(O, c.IB_FIRE1) || (0, c.input_button_pressed)(O, c.IB_FIRE3)) return (0, u.sound_play)((0, g.soundfactory_get)("select")), void oe(Q[z])
            }
        }, t.menu_render = function() {
            var e = void 0,
                t = (0, s.v2d_new)(d.VIDEO_SCREEN_W / 2, d.VIDEO_SCREEN_H / 2);
            if ((0, d.video_clearDisplay)(), !V || !(0, d.video_fadefx_over)()) switch ((0, b.background_render_bg)(k, t), (0, b.background_render_fg)(k, t), S) {
                case x:
                    for (e = 0; e < R; e++)(0, h.font_render)(M[e][e == P ? 1 : 0], t);
                    (0, m.actor_render)(A, t), (0, h.font_render)(H, t), (0, h.font_render)(G, t), (0, m.actor_render)(C, t), j && (0, d.video_clearDisplay)(), (0, m.actor_render)(B, t), (0, m.actor_render)(F, t);
                    break;
                case w:
                    var n = Q[z].image;
                    for ((0, h.font_render)(K, t), (0, l.image_blit)(n, (0, d.video_get_backbuffer)(), 0, 0, d.VIDEO_SCREEN_W - n.width - 25, parseInt($[0].position.y, 10), n.width, n.height), (0, h.font_render)(X[0], t), (0, h.font_render)(X[1], t), e = 0; e < q; e++)(0, h.font_render)($[e], t);
                    (0, m.actor_render)(A, t)
            }
        }, t.menu_release = function() {
            var e = void 0,
                t = void 0;
            for (J.pause(), (0, h.font_destroy)(H), (0, h.font_destroy)(G), e = 0; e < 2; e++)
                for (t = 0; t < R; t++)(0, h.font_destroy)(M[t][e]);
            (0, m.actor_destroy)(C), (0, m.actor_destroy)(F), (0, m.actor_destroy)(B), (0, m.actor_destroy)(A), (0, c.input_destroy)(O)
        }, function(e) {
            var t = E[0];
            switch (e) {
                case 0:
                    return void(0, a.quest_load)(t).then(function(e) {
                        oe(e)
                    });
                case 1:
                    return void(0, a.quest_load)("data/quests/tutorial.json").then(function(e) {
                        oe(e)
                    });
                case 2:
                    S = w, z = 0;
                    break;
                case 3:
                    return L = (0, r.storyboard_get_scene)(r.SCENE_OPTIONS), void(0, d.video_fadefx_out)((0, l.image_rgb)(0, 0, 0), .5)
            }
        }),
        ee = function() {
            var e;
            for (q = E.length, Q = [], e = 0; e < q; e++) ! function(t) {
                (0, a.quest_load)(E[e]).then(function(e) {
                    $[t] = (0, h.font_create)(8), Q[t] = e, (0, h.font_set_text)($[t], e.name)
                })
            }(e)
        },
        te = function(e) {
            return U = Math.floor(e / W + 1)
        },
        ne = function() {
            return Y = Math.floor(q / W + (q % W == 0 ? 0 : 1))
        },
        oe = function(e) {
            (0, o.quest_run)(e, !1), L = (0, r.storyboard_get_scene)(r.SCENE_QUEST), (0, c.input_ignore)(O), (0, d.video_fadefx_out)((0, l.image_rgb)(0, 0, 0), .5)
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.options_release = t.options_render = t.options_update = t.options_init = void 0;
    var o = n(85),
        a = n(4),
        i = n(14),
        r = n(19),
        _ = n(25),
        s = n(2),
        c = n(10),
        d = n(12),
        l = n(5),
        u = n(6),
        p = n(18),
        f = n(13),
        g = n(0),
        v = n(3),
        m = n(15),
        h = n(1),
        b = n(21),
        y = "data/themes/options.bg.json",
        I = "data/music/options.mp4",
        E = void 0,
        x = void 0,
        w = void 0,
        S = void 0,
        O = void 0,
        L = void 0,
        k = void 0,
        R = void 0,
        N = 5,
        T = void 0,
        D = void 0,
        P = (t.options_init = function() {
            T = 0, E = !1, k = 0, O = (0, f.input_create_user)(), L = null, x = !0, w = (0, m.font_create)(4), (0, m.font_set_text)(w, (0, p.lang_get)("OPTIONS_TITLE")), w.position.x = c.VIDEO_SCREEN_W / 2 - 100, w.position.y = 10, R = (0, b.background_load)(y).then(function(e) {
                R = e
            }), S = (0, h.actor_create)(), (0, h.actor_change_animation)(S, (0, g.sprite_get_animation)("SD_TITLEFOOT", 0)), S.position = (0, s.v2d_new)(-50, -50), D = Me(), (0, o.grouptree_init_all)(D)
        }, t.options_update = function() {
            if (k += (0, v.timer_get_delta)(), (0, m.font_set_text)(w, (0, p.lang_get)("OPTIONS_TITLE")), x && ((0, c.video_fadefx_in)((0, d.image_rgb)(0, 0, 0), 1), x = !1), (0, b.background_update)(R), E || null != L || (0, c.video_fadefx_is_fading)() || ((0, f.input_button_pressed)(O, f.IB_DOWN) && (T = (T + 1) % N, (0, l.sound_play)((0, u.soundfactory_get)("choose"))), (0, f.input_button_pressed)(O, f.IB_UP) && (T = ((T - 1) % N + N) % N, (0, l.sound_play)((0, u.soundfactory_get)("choose"))), (0, f.input_button_pressed)(O, f.IB_FIRE4) && ((0, l.sound_play)((0, u.soundfactory_get)("return")), E = !0)), (0, o.grouptree_update_all)(D), E)(0, c.video_fadefx_is_fading)() || (0, l.music_stop)();
            else if (!(0, l.music_is_playing)() && k >= .2) {
                var e = (0, l.music_load)(I);
                (0, l.music_play)(e, a.INFINITY)
            }
            if (E) {
                if ((0, c.video_fadefx_over)()) return P(), (0, i.scenestack_pop)(), void(0, i.scenestack_push)((0, r.storyboard_get_scene)(r.SCENE_MENU));
                (0, c.video_fadefx_out)((0, d.image_rgb)(0, 0, 0), 1)
            }
            if (null != L) {
                if ((0, c.video_fadefx_over)()) return P(), (0, i.scenestack_push)(L), L = null, void(x = !0);
                (0, c.video_fadefx_out)((0, d.image_rgb)(0, 0, 0), 1)
            }
        }, t.options_render = function() {
            var e = (0, s.v2d_new)(c.VIDEO_SCREEN_W / 2, c.VIDEO_SCREEN_H / 2);
            (0, b.background_render_bg)(R, e), (0, b.background_render_fg)(R, e), (0, m.font_render)(w, e), (0, o.grouptree_render_all)(D, e), (0, h.actor_render)(S, e)
        }, t.options_release = function() {
            (0, h.actor_destroy)(S), (0, m.font_destroy)(w), (0, f.input_destroy)(O)
        }, function() {
            (0, _.preferences_set_video_resolution)((0, c.video_get_resolution)()), (0, _.preferences_set_fullscreen)((0, c.video_is_fullscreen)()), (0, _.preferences_set_smooth_graphics)((0, c.video_is_smooth)()), (0, _.preferences_set_show_fps)((0, c.video_is_fps_visible)())
        }),
        M = function(e, t) {
            (0, o.grouptree_group_label_init)(e), e.data = t, (0, m.font_set_text)(e.font, (0, p.lang_get)(t))
        },
        A = function(e) {
            e.data = null, (0, o.grouptree_group_label_release)(e)
        },
        j = function(e) {
            (0, o.grouptree_group_label_update)(e), (0, m.font_set_text)(e.font, (0, p.lang_get)(e.data))
        },
        B = function(e, t) {
            (0, o.grouptree_group_label_render)(e, t)
        },
        C = function(e, t, n) {
            var a = void 0;
            (0, o.grouptree_group_label_init)(e), (0, m.font_set_text)(e.font, (0, p.lang_get)(t)), e.data = {}, a = e.data, a.option_index = n, a.lang_key = t
        },
        F = function(e) {
            e.data = null, (0, o.grouptree_group_label_release)(e)
        },
        H = function(e) {
            return T == e.data.option_index
        },
        G = function(e) {
            var t = e.data;
            (0, o.grouptree_group_label_update)(e), (0, m.font_set_text)(e.font, (0, p.lang_get)(t.lang_key)), H(e) && ((0, m.font_set_text)(e.font, "<color=ffff00>%s</color>", (0, p.lang_get)(t.lang_key)), S.position = (0, s.v2d_add)(e.font.position, (0, s.v2d_new)(-20 + 3 * Math.cos(2 * a.PI * k), 0)))
        },
        V = function(e, t) {
            (0, o.grouptree_group_label_render)(e, t)
        },
        W = function(e) {
            (0, o.grouptree_group_label_init)(e), (0, m.font_set_text)(e.font, ""), e.font.position = (0, s.v2d_new)(0, 25)
        },
        U = function(e) {
            (0, o.grouptree_group_label_release)(e)
        },
        Y = function(e) {
            (0, o.grouptree_group_label_update)(e)
        },
        X = function(e, t) {
            (0, o.grouptree_group_label_render)(e, t)
        },
        K = function() {
            return (0, o.grouptree_group_create)(W, U, Y, X)
        },
        z = function(e) {
            M(e, "OPTIONS_GRAPHICS")
        },
        q = function(e) {
            A(e)
        },
        $ = function(e) {
            j(e)
        },
        Q = function(e, t) {
            B(e, t)
        },
        J = function() {
            return (0, o.grouptree_group_create)(z, q, $, Q)
        },
        Z = function(e) {
            C(e, "OPTIONS_FPS", 0)
        },
        ee = function(e) {
            F(e)
        },
        te = function(e) {
            return H(e)
        },
        ne = function(e) {
            G(e), te(e) && ((0, c.video_fadefx_is_fading)() || (((0, f.input_button_pressed)(O, f.IB_FIRE1) || (0, f.input_button_pressed)(O, f.IB_FIRE3)) && ((0, l.sound_play)((0, u.soundfactory_get)("select")), (0, c.video_show_fps)(!(0, c.video_is_fps_visible)())), (0, f.input_button_pressed)(O, f.IB_RIGHT) && (0, c.video_is_fps_visible)() && ((0, l.sound_play)((0, u.soundfactory_get)("select")), (0, c.video_show_fps)(!1)), (0, f.input_button_pressed)(O, f.IB_LEFT) && ((0, c.video_is_fps_visible)() || ((0, l.sound_play)((0, u.soundfactory_get)("select")), (0, c.video_show_fps)(!0)))))
        },
        oe = function(e, t) {
            var n = void 0,
                o = [];
            V(e, t), n = (0, m.font_create)(8), n.position = (0, s.v2d_new)(175, e.font.position.y), o[0] = (0, p.lang_get)("OPTIONS_YES"), o[1] = (0, p.lang_get)("OPTIONS_NO"), (0, c.video_is_fps_visible)() ? (0, m.font_set_text)(n, "<color=ffff00>%s</color>  %s", o[0], o[1]) : (0, m.font_set_text)(n, "%s  <color=ffff00>%s</color>", o[0], o[1]), (0, m.font_render)(n, t), (0, m.font_destroy)(n)
        },
        ae = function() {
            return (0, o.grouptree_group_create)(Z, ee, ne, oe)
        },
        ie = function(e) {
            M(e, "OPTIONS_GAME")
        },
        re = function(e) {
            A(e)
        },
        _e = function(e) {
            j(e)
        },
        se = function(e, t) {
            B(e, t)
        },
        ce = function() {
            return (0, o.grouptree_group_create)(ie, re, _e, se)
        },
        de = function(e) {
            C(e, "OPTIONS_LANGUAGE", 1)
        },
        le = function(e) {
            F(e)
        },
        ue = function(e) {
            return H(e)
        },
        pe = function(e) {
            G(e), ue(e) && ((0, c.video_fadefx_is_fading)() || ((0, f.input_button_pressed)(O, f.IB_FIRE1) || (0, f.input_button_pressed)(O, f.IB_FIRE3)) && ((0, l.sound_play)((0, u.soundfactory_get)("select")), L = (0, r.storyboard_get_scene)(r.SCENE_LANGSELECT)))
        },
        fe = function(e, t) {
            V(e, t)
        },
        ge = function() {
            return (0, o.grouptree_group_create)(de, le, pe, fe)
        },
        ve = function(e) {
            C(e, "OPTIONS_STAGESELECT", 2)
        },
        me = function(e) {
            F(e)
        },
        he = function(e) {
            return H(e)
        },
        be = function(e) {
            G(e), he(e) && ((0, c.video_fadefx_is_fading)() || ((0, f.input_button_pressed)(O, f.IB_FIRE1) || (0, f.input_button_pressed)(O, f.IB_FIRE3)) && ((0, l.sound_play)((0, u.soundfactory_get)("select")), L = (0, r.storyboard_get_scene)(r.SCENE_STAGESELECT)))
        },
        ye = function(e, t) {
            V(e, t)
        },
        Ie = function() {
            return (0, o.grouptree_group_create)(ve, me, be, ye)
        },
        Ee = function(e) {
            C(e, "OPTIONS_CREDITS", 3)
        },
        xe = function(e) {
            F(e)
        },
        we = function(e) {
            return H(e)
        },
        Se = function(e) {
            G(e), we(e) && ((0, c.video_fadefx_is_fading)() || ((0, f.input_button_pressed)(O, f.IB_FIRE1) || (0, f.input_button_pressed)(O, f.IB_FIRE3)) && ((0, l.sound_play)((0, u.soundfactory_get)("select")), L = (0, r.storyboard_get_scene)(r.SCENE_CREDITS)))
        },
        Oe = function(e, t) {
            V(e, t)
        },
        Le = function() {
            return (0, o.grouptree_group_create)(Ee, xe, Se, Oe)
        },
        ke = function(e) {
            C(e, "OPTIONS_BACK", 4)
        },
        Re = function(e) {
            F(e)
        },
        Ne = function(e) {
            return H(e)
        },
        Te = function(e) {
            G(e), Ne(e) && ((0, c.video_fadefx_is_fading)() || ((0, f.input_button_pressed)(O, f.IB_FIRE1) || (0, f.input_button_pressed)(O, f.IB_FIRE3)) && ((0, l.sound_play)((0, u.soundfactory_get)("select")), E = !0))
        },
        De = function(e, t) {
            V(e, t)
        },
        Pe = function() {
            return (0, o.grouptree_group_create)(ke, Re, Te, De)
        },
        Me = function() {
            var e = void 0,
                t = void 0,
                n = void 0,
                a = void 0,
                i = void 0,
                r = void 0,
                _ = void 0,
                s = void 0;
            return n = ae(), t = J(), (0, o.grouptree_group_addchild)(t, n), i = ge(), r = Le(), _ = Ie(), a = ce(), (0, o.grouptree_group_addchild)(a, i), (0, o.grouptree_group_addchild)(a, _), (0, o.grouptree_group_addchild)(a, r), s = Pe(), e = K(), (0, o.grouptree_group_addchild)(e, t), (0, o.grouptree_group_addchild)(e, a), (0, o.grouptree_group_addchild)(e, s), e
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pause_release = t.pause_render = t.pause_update = t.pause_init = void 0;
    var o = n(28),
        a = n(22),
        i = n(4),
        r = n(14),
        _ = n(19),
        s = n(2),
        c = n(10),
        d = n(12),
        l = n(13),
        u = n(18),
        p = n(0),
        f = n(3),
        g = void 0,
        v = void 0,
        m = void 0,
        h = void 0,
        b = void 0;
    t.pause_init = function() {
        v = (0, l.input_create_user)(), m = !1, h = !1, b = 0
    }, t.pause_update = function() {
        if ((0, l.input_button_pressed)(v, l.IB_FIRE4)) {
            var e = void 0;
            return (0, u.lang_getstring)("CBOX_QUIT_QUESTION", e[0], sizeof(e[0])), (0, u.lang_getstring)("CBOX_QUIT_OPTION1", e[1], sizeof(e[1])), (0, u.lang_getstring)("CBOX_QUIT_OPTION2", e[2], sizeof(e[2])), (0, o.confirmbox_alert)(e[0], e[1], e[2]), void(0, r.scenestack_push)((0, _.storyboard_get_scene)(_.SCENE_CONFIRMBOX))
        }
        if (1 == (0, o.confirmbox_selected_option)() && (h = !0), h) return (0, c.video_fadefx_over)() ? ((0, r.scenestack_pop)(), (0, r.scenestack_pop)(), void(0, a.quest_abort)()) : void(0, c.video_fadefx_out)(image.rgb(0, 0, 0), 1);
        if (m) {
            if ((0, l.input_button_pressed)(v, l.IB_FIRE3)) return audio.music_resume(), void(0, r.scenestack_pop)()
        } else(0, l.input_button_up)(v, l.IB_FIRE3) && (m = !0)
    }, t.pause_render = function() {
        var e = (0, p.sprite_get_image)((0, p.sprite_get_animation)("SD_PAUSE", 0), 0),
            t = 1 + .5 * Math.abs(Math.cos(i.PI / 2 * b));
        (0, s.v2d_new)((c.VIDEO_SCREEN_W - e.width) / 2 - (t - 1) * e.width / 2, (c.VIDEO_SCREEN_H - e.height) / 2 - (t - 1) * e.height / 2);
        h || (b += (0, f.timer_get_delta)())
    }, t.pause_release = function() {
        (0, d.image_destroy)(g), (0, l.input_destroy)(v)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.questover_release = t.questover_render = t.questover_update = t.questover_init = void 0;
    var o = n(22),
        a = n(14),
        i = n(19),
        r = n(2),
        _ = n(4),
        s = n(10),
        c = n(12),
        d = n(0),
        l = n(5),
        u = n(13),
        p = n(18),
        f = n(3),
        g = n(1),
        v = n(15),
        m = n(16),
        h = "data/music/invincible.mp4",
        b = void 0,
        y = void 0,
        I = void 0,
        E = void 0,
        x = void 0,
        w = void 0;
    t.questover_init = function() {
        b = (0, f.timer_get_ticks)(), w = !1, y = (0, v.font_create)(8), y.position = (0, r.v2d_new)(5, 35), I = (0, v.font_create)(4), (0, v.font_set_text)(I, (0, p.lang_get)("QUESTCLEARED_TITLE")), I.position = (0, r.v2d_new)((s.VIDEO_SCREEN_W, parseInt((0, v.font_get_charsize)(I).x * (0, v.font_get_text)(I)).length, 10), 5), E = (0, g.actor_create)(), (0, g.actor_change_animation)(E, (0, d.sprite_get_animation)("SD_SONIC", 24)), E.position = (0, r.v2d_new)(20, 150), (0, l.music_play)((0, l.music_load)(h), 0), x = (0, u.input_create_user)(), (0, s.video_fadefx_in)((0, c.image_rgb)(0, 0, 0), 2)
    }, t.questover_update = function() {
        var e = (0, o.quest_getname)(),
            t = (0, m.player_get_score)(),
            n = (0, o.quest_getvalue)("QUESTVALUE_TOTALTIME") / 3600,
            r = parseInt((0, o.quest_getvalue)("QUESTVALUE_TOTALTIME") / 60 % 60, 10),
            d = parseInt((0, o.quest_getvalue)("QUESTVALUE_TOTALTIME") % 60, 10),
            l = (0, o.quest_getvalue)("QUESTVALUE_GLASSES"),
            g = (0, o.quest_getvalue)("QUESTVALUE_BIGRINGS");
        (0, f.timer_get_ticks)();
        if ((0, v.font_set_text)(y, (0, p.lang_get)("QUESTCLEARED_TEXT"), e, t, n, r, d, l, g, _.GAME_TITLE, _.GAME_WEBSITE), (0, u.input_button_pressed)(x, u.IB_FIRE1) && (w = !0), w) {
            if ((0, s.video_fadefx_over)()) return (0, a.scenestack_pop)(), void(0, a.scenestack_push)((0, i.storyboard_get_scene)(i.SCENE_MENU));
            (0, s.video_fadefx_out)((0, c.image_rgb)(0, 0, 0), 2)
        }
    }, t.questover_render = function() {
        var e = (0, r.v2d_new)(s.VIDEO_SCREEN_W / 2, s.VIDEO_SCREEN_H / 2);
        (0, s.video_clearDisplay)(), (0, v.font_render)(I, e), (0, v.font_render)(y, e), (0, g.actor_render)(E, e)
    }, t.questover_release = function() {
        (0, u.input_destroy)(x), (0, g.actor_destroy)(E), (0, v.font_destroy)(I), (0, v.font_destroy)(y)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.stageselect_release = t.stageselect_render = t.stageselect_update = t.stageselect_init = void 0;
    var o = n(7),
        a = n(14),
        i = n(19),
        r = n(2),
        _ = n(4),
        s = n(8),
        c = n(10),
        d = n(12),
        l = n(5),
        u = n(18),
        p = n(13),
        f = n(0),
        g = n(17),
        v = n(3),
        m = n(6),
        h = n(15),
        b = n(1),
        y = n(16),
        I = n(21),
        E = ["data/levels/blue_ocean_1.json", "data/levels/blue_ocean_2.json", "data/levels/blue_ocean_3.json", "data/levels/desert1.json", "data/levels/exotic_1.json", "data/levels/exotic_2.json", "data/levels/exotic_3.json", "data/levels/exotichell_1.json", "data/levels/prototype.json", "data/levels/superboss_1.json", "data/levels/superboss_2.json", "data/levels/template.json", "data/levels/tutorial_1.json", "data/levels/tutorial_2.json", "data/levels/test.json"],
        x = "data/music/options.mp4",
        w = "data/themes/levelselect.bg.json",
        S = 8,
        O = void 0,
        L = 1,
        k = void 0,
        R = void 0,
        N = void 0,
        T = void 0,
        D = void 0,
        P = void 0,
        M = void 0,
        A = void 0,
        j = [],
        B = 0,
        C = 0,
        F = [],
        H = 0,
        G = 1,
        V = 2,
        W = 3,
        U = (t.stageselect_init = function() {
            C = 0, P = 0, A = H, D = (0, p.input_create_user)(), k = (0, h.font_create)(4), (0, h.font_set_text)(k, (0, u.lang_get)("STAGESELECT_TITLE")), k.position.x = (c.VIDEO_SCREEN_W - (0, h.font_get_text)(k).length * (0, h.font_get_charsize)(k).x) / 2 - 150, k.position.y = 10, R = (0, h.font_create)(8), (0, h.font_set_text)(R, (0, u.lang_get)("STAGESELECT_MSG")), R.position.x = 10, R.position.y = c.VIDEO_SCREEN_H - 1.5 * (0, h.font_get_charsize)(R).y, N = (0, h.font_create)(8), (0, h.font_set_text)(N, (0, u.lang_get)("STAGESELECT_PAGE"), 0, 0), N.position.x = c.VIDEO_SCREEN_W - (0, h.font_get_text)(N).length * (0, h.font_get_charsize)(N).x - 10, N.position.y = 40, (0, I.background_load)(w).then(function(e) {
                M = e
            }), T = (0, b.actor_create)(), (0, b.actor_change_animation)(T, (0, f.sprite_get_animation)("SD_TITLEFOOT", 0)), U(), (0, c.video_fadefx_in)((0, d.image_rgb)(0, 0, 0), 1)
        }, t.stageselect_update = function() {
            if (P += (0, v.timer_get_delta)(), (0, I.background_update)(M), F.length) {
                if (T.position = (0, r.v2d_new)(F[C].position.x, F[C].position.y), T.position.x += -20 + 3 * Math.cos(2 * _.PI * P), O = Math.floor(C / S + 1), L = Math.floor(B / S + (B % S == 0 ? 0 : 1)), (0, h.font_set_text)(N, (0, u.lang_get)("STAGESELECT_PAGE"), O, L), N.position.x = c.VIDEO_SCREEN_W - (0, h.font_get_text)(N).length * (0, h.font_get_charsize)(N).x - 10, A == V)(0, c.video_fadefx_is_fading)() || (0, l.music_stop)();
                else if (!(0, l.music_is_playing)()) {
                    var e = (0, l.music_load)(x);
                    (0, l.music_play)(e, _.INFINITY)
                }
                switch (A) {
                    case H:
                        (0, c.video_fadefx_is_fading)() || ((0, p.input_button_pressed)(D, p.IB_DOWN) && (C = (C + 1) % B, (0, l.sound_play)((0, m.soundfactory_get)("choose"))), (0, p.input_button_pressed)(D, p.IB_UP) && (C = ((C - 1) % B + B) % B, (0, l.sound_play)((0, m.soundfactory_get)("choose"))), ((0, p.input_button_pressed)(D, p.IB_FIRE1) || (0, p.input_button_pressed)(D, p.IB_FIRE3)) && ((0, s.logfile_message)('Loading level "%s", "%s"', j[C].name, j[C].filepath), (0, o.level_setfile)(j[C].filepath), (0, l.sound_play)((0, m.soundfactory_get)("select")), A = V), (0, p.input_button_pressed)(D, p.IB_FIRE4) && ((0, l.sound_play)((0, m.soundfactory_get)("return")), A = G));
                        break;
                    case G:
                        if ((0, c.video_fadefx_over)()) return void(0, a.scenestack_pop)();
                        (0, c.video_fadefx_out)((0, d.image_rgb)(0, 0, 0), 1);
                        break;
                    case V:
                        if ((0, c.video_fadefx_over)()) return (0, y.player_set_lives)(y.PLAYER_INITIAL_LIVES), (0, y.player_set_score)(0), (0, a.scenestack_push)((0, i.storyboard_get_scene)(i.SCENE_LEVEL)), void(A = W);
                        (0, c.video_fadefx_out)((0, d.image_rgb)(0, 0, 0), 1);
                        break;
                    case W:
                        (0, c.video_fadefx_in)((0, d.image_rgb)(0, 0, 0), 1), A = H
                }
            }
        }, t.stageselect_render = function() {
            var e = void 0,
                t = (0, r.v2d_new)(c.VIDEO_SCREEN_W / 2, c.VIDEO_SCREEN_H / 2);
            for ((0, I.background_render_bg)(M, t), (0, I.background_render_fg)(M, t), (0, h.font_render)(k, t), (0, h.font_render)(R, t), L > 1 && (0, h.font_render)(N, t), e = (O - 1) * S; e < O * S; e++) j[e] && ((0, h.font_set_text)(F[e], C == e ? "<color=ffff00>%s - %s %s</color>" : "%s - %s %s", j[e].name, (0, u.lang_get)("STAGESELECT_ACT"), j[e].act), (0, h.font_render)(F[e], t));
            (0, b.actor_render)(T, t)
        }, t.stageselect_release = function() {
            Y(), M = (0, I.background_unload)(M), (0, b.actor_destroy)(T), (0, h.font_destroy)(k), (0, h.font_destroy)(R), (0, h.font_destroy)(N), (0, p.input_destroy)(D)
        }, function() {
            (0, s.logfile_message)("load_stage_list()"), (0, g.resourcemanager_getJsonFiles)(E).then(function(e) {
                j = e, B = j.length;
                for (var t = 0; t < B; t++) F[t] = (0, h.font_create)(8), F[t].position = (0, r.v2d_new)(25, 60 + t % S * 20), j[t].filepath = E[t]
            })
        }),
        Y = function() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.editorgrp_get_group = t.editorgrp_group_count = t.editorgrp_load_from_file = t.editorgrp_release = t.editorgrp_init = void 0;
    var o = n(9),
        a = n(8),
        i = 501,
        r = [],
        _ = void 0,
        s = (t.editorgrp_init = function() {
            var e = void 0;
            for (_ = 0, e = 0; e < i; e++) r[e] = null
        }, t.editorgrp_release = function() {
            var e = void 0;
            for (e = 0; e < _; e++) r[e] = s(r[e]);
            _ = 0
        }, t.editorgrp_load_from_file = function(e) {
            (0, a.logfile_message)("editorgrp_load_from_file() loaded %d group(s)", _)
        }, t.editorgrp_group_count = function() {
            return _
        }, t.editorgrp_get_group = function(e) {
            return _ > 0 ? (e = (0, o.clip)(e, 0, _ - 1), r[e]) : null
        }, function e(t) {
            return null != t && (t.next = e(t.next), t = null, t = null), t
        })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.grouptree_group_label_render = t.grouptree_group_label_update = t.grouptree_group_label_release = t.grouptree_group_label_init = t.grouptree_group_label_create = t.grouptree_group_addchild = t.grouptree_group_create = t.grouptree_nodecount = t.grouptree_render_all = t.grouptree_update_all = t.grouptree_release_all = t.grouptree_init_all = t.grouptree_destroy_all = t.GROUPTREE_MAXCHILDREN = void 0;
    var o = n(2),
        a = n(15),
        i = t.GROUPTREE_MAXCHILDREN = 10,
        r = (t.grouptree_destroy_all = function e(t) {
            var n = void 0;
            if (t) {
                for (n = 0; n < t.child_count; n++) e(t.child[n]);
                t = null
            }
        }, t.grouptree_init_all = function e(t) {
            var n = void 0;
            if (t)
                for (t.init(t), n = 0; n < t.child_count; n++) e(t.child[n])
        }, t.grouptree_release_all = function e(t) {
            var n = void 0;
            if (t) {
                for (n = 0; n < t.child_count; n++) e(t.child[n]);
                t.release(t)
            }
        }, t.grouptree_update_all = function e(t) {
            var n = void 0;
            if (t) {
                for (n = 0; n < t.child_count; n++) e(t.child[n]);
                t.update(t)
            }
        }, t.grouptree_render_all = function e(t, n) {
            var o = void 0;
            if (t) {
                for (o = 0; o < t.child_count; o++) e(t.child[o], n);
                t.render(t, n)
            }
        }, t.grouptree_nodecount = function e(t) {
            var n = void 0,
                o = 0;
            if (t) {
                for (n = 0; n < t.child_count; n++) o += e(t.child[n]);
                return 1 + o
            }
            return 0
        }),
        _ = t.grouptree_group_create = function(e, t, n, o) {
            var a = {};
            return a.init = e, a.release = t, a.update = n, a.render = o, a.font = null, a.data = null, a.parent = null, a.child_count = 0, a.child = [], a
        };
    t.grouptree_group_addchild = function(e, t) {
        e.child_count < i && (e.child[e.child_count++] = t, t.parent = e)
    }, t.grouptree_group_label_create = function() {
        return _(group_label_init, group_label_release, group_label_update, group_label_render)
    }, t.grouptree_group_label_init = function(e) {
        if (e.font = (0, a.font_create)(8), (0, a.font_set_text)(e.font, "LABEL"), null != e.parent) {
            var t = void 0,
                n = void 0,
                i = 0,
                _ = null != e.parent.font ? (0, a.font_get_charsize)(e.parent.font) : (0, o.v2d_new)(12, 12);
            for (t = 0; t < e.parent.child_count && e.parent.child[t] != e; t++);
            for (n = 0; n < t; n++) i += r(e.parent.child[n]) - 1;
            e.font.position = {
                x: e.parent.font.position.x,
                y: e.parent.font.position.y
            }, e.font.position.x += 3 * _.x, e.font.position.y += (1 + i + t) * _.y * 2
        }
    }, t.grouptree_group_label_release = function(e) {
        (0, a.font_destroy)(e.font)
    }, t.grouptree_group_label_update = function(e) {}, t.grouptree_group_label_render = function(e, t) {
        (0, a.font_render)(e.font, t)
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a;
    (0, n(34).engine_init)((a = {
        Xvideo_resolution: "TINY",
        Xsmooth_graphics: !1,
        Xfullscreen: !1,
        Xshow_fps: !0,
        Xcolor_depth: 32,
        Xlevel: null
    }, o(a, "Xlevel", "data/levels/blue_ocean_3.json"), o(a, "Xquest", null), o(a, "Xquest", "data/quests/tutorial.json"), o(a, "Xlanguage", null), o(a, "Xlanguage", "data/languages/italiano.json"), a))
}]);