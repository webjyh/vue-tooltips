<template lang="html">
    <div class="vue-ui-tooltips" :class="[className, {'is-show': isShow}]">
        <span v-html="message"></span>
    </div>
</template>

<script>
export default {
    name: 'tooltips',
    data() {
        return {
            timeout: null,
            isShow: false,
            message: '',
            type: 'success',
            duration: 3000,
            callback() {}
        }
    },
    computed: {
        className() {
            let type = '';
            switch (this.type) {
                case 'default': type = 'vue-ui-tooltips-default'; break;
                case 'success': type = 'vue-ui-tooltips-success'; break;
                case 'warning': type = 'vue-ui-tooltips-warning'; break;
                case 'danger': type = 'vue-ui-tooltips-danger'; break;
                default: type = 'vue-ui-tooltips-success';
            }
            return type;
        }
    },
    mounted() {
        this.show().bind();
    },
    methods: {
        bind() {
            let _this = this;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function() {
                _this.hide();
            }, this.duration);

            return this;
        },
        hide() {
            let _this = this;
            let remove = function() {
                _this.$el.parentNode.removeChild(_this.$el);
                _this.callback && _this.callback.apply(_this);
            };

            this.isShow = false;
            this.$el.addEventListener('transitionend', remove, {once: true});

            return this;
        },
        show() {
            let _this = this;

            setTimeout(function() {
                _this.isShow = true;
            }, 100);

            return this;
        }
    }
}
</script>

<style lang="less">
.vue-ui-tooltips {
    margin: 0;
    padding: 0;
    position: fixed;
    left: 50%;
    top: 0;
    max-width: 640px;
    width: 50%;
    margin-left: -320px;
    z-index: 2000;
    min-height: 44px;
    line-height: 1.6;
    text-align: center;
    color: #404040;
    -webkit-transform: translate3d(0, -100%, 0);
         transform: translate3d(0, -100%, 0);
    -webkit-transition: visibility 0s linear .7s, -webkit-transform .7s ease 0s;
    transition: visibility 0s linear .7s, -webkit-transform .7s ease 0s;
    transition: transform .7s ease 0s, visibility 0s linear .7s;
    transition: transform .7s ease 0s, visibility 0s linear .7s, -webkit-transform .7s ease 0s;
    background: transparent;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    span {
        margin: 0;
        padding: 8px 20px;
        display: inline-block;
        background-color: #FFF;
        border-radius: 0 0 5px 5px;
        font-size: 16px;
        min-height: 44px;
        line-height: 1.6;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        border-top: 0;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
    }
    &.vue-ui-tooltips-default {
        span {
            background-color: #FFF;
        }
    }
    &.vue-ui-tooltips-success {
        span {
            background-color: #50bfff;
            border-color: #50bfff;
            color: #FFF;
        }
    }
    &.vue-ui-tooltips-warning {
        span {
            background-color: #f9c855;
            border-color: #f9c855;
            color: #FFF;
        }
    }
    &.vue-ui-tooltips-danger {
        span {
            background-color: #ff4949;
            border-color: #ff4949;
            color: #FFF;
        }
    }
    &.is-show {
        -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
    }
}

@media screen and (max-width: 640px) {
    .vue-ui-tooltips {
        max-width: none;
        width: 100%;
        left: 0;
        margin-left: 0;
    }
}
</style>
