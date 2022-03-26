import Vue from 'vue';
import { getLang } from '../../utils/lang';

export default Vue.component('status-time', {
    template: '<span>{{ formattedTime }}</span>',

    data: function () {
        return {
            time: new Date(),
            lang: getLang()
        };
    },

    computed: {
        formattedTime: function () {
            let str = '';
            const hour = this.time.getHours();

            if (this.lang === 'zh') {
                if (hour > 4 && hour < 12) {
                    str += '';
                }
                else if (hour >= 12 && hour < 14) {
                    str += '';
                }
                else if (hour > 14 && hour < 18) {
                    str += '';
                }
                else {
                    str += '';
                }
            }

            let minutes = this.time.getMinutes();
            minutes = (minutes < 10 ? '0' : '') + minutes;
            str += ' ' + hour + ':' + minutes;
            return str;
        }
    },

    created: function() {
        setInterval(() => {
            this.time = new Date();
        }, 1000);
    }
});
