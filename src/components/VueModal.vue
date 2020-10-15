<template>
    <div v-if="isShowModal">
        <div id="modal" @click.self="hide">
            <div id="modal-overlay">
                <div id="modal-header">
                    {{title}}
                </div>

                <div id="modal-content">
                    <slot name="content"/>
                </div>

                <div id="modal-footer" class="float-right float-bottom">
                    <slot name="footer"/>
                    <button type="button" id="cancel_button" @click="hide">취소</button>
                    <button type="button" class="btn-primary" id="ok_button" @click="ok">완료</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VueModal',
        components: {},
        props: [
            'title'
        ],
        data() {
            return {
                isShowModal: false
            }
        },
        methods: {
            show() {
                this.$emit('show');
                this.isShowModal = true;
            },

            hide() {
                this.$emit('hide');
                this.isShowModal = false;
            },

            ok() {
                this.$emit('ok');
                this.hide();
            }
        }
    }
</script>

<style scoped>
    #modal {
        display: block;
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgba(4, 4, 15, 0.8);
    }

    /* Modal Content/Box */
    #modal-overlay {
        margin: 15% auto; /* 15% from the top and centered */
        border: 1px solid #888;

        width: 654px;
        height: 403px;
        border-radius: 8px;
        background-color: #ffffff;

        padding: 40px 84px;
    }

    #modal-header {
        height: 44px;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        color: #333333;
    }

    #modal-content {
        padding-top: 56px;
    }

    #modal-footer {
        margin-top: 40px;
    }

    #cancel_button {
        width: 62px;
        color: black;
        border: solid 1px #dadbdf;
        background-color: rgba(255, 255, 255, 0);
        margin-right: 12px;
    }

    #ok_button {
        width: 62px;
        background-color: #4c80f1;
    }

</style>