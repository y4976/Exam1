<template>
    <div id="modal" ref="modal">
        <div id="modal-body">
            <div id="header">
                {{title}}
            </div>

            <div id="content">
                <slot name="content"/>
            </div>

            <div id="footer" class="float-right">
                <slot name="footer"/>
                <button type="button" id="cancel_button">취소</button>
                <button type="button" class="btn-primary" id="ok_button">완료</button>
            </div>

<!--            <div class="modal-layer"></div>-->
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
        created() {
            window.onclick = function(event) {
                let modal = document.getElementById("modal");
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            show() {
                this.$refs.modal.style.display = "block";
            },

            hide() {
                this.$refs.modal.style.display = "none";
            },
        }
    }
</script>

<style scoped>
    #modal {
        display: none; /* Hidden by default */
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
    #modal-body {
        margin: 15% auto; /* 15% from the top and centered */
        border: 1px solid #888;

        width: 824px;
        height: 485px;
        border-radius: 8px;
        background-color: #ffffff;

        padding: 40px 84px;
    }

    #content {
        padding-top: 56px;
    }

    #header {
        height: 44px;
        font-size: 32px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.38;
        letter-spacing: normal;
        color: #333333;
    }

    #cancel_button {
        width: 62px;
        height: 44px;
        border-radius: 8px;
        border: solid 1px #dadbdf;
        background-color: rgba(255, 255, 255, 0);
    }

    #ok_button {
        width: 62px;
        height: 44px;
        border-radius: 8px;
        background-color: #4c80f1;
    }

</style>