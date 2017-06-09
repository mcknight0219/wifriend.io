<template>
    <modal :visible="visible" @close="close">
        <div class="box has-text-centered">
            <input id="image" name="image" type="file" class="inputfile" @change="onFileSelected">
            <label for="image">{{ name }}</label>


            <div class="field" style="margin-top: 25px;">
                <p class="control" style="text-align:center;"><a class="button is-icon" @click="upload"><i class="fa fa-upload" aria-hidden="true"></i>上传</a></p>
            </div>
        </div>
    </modal>
</template>

<script>
import { Modal } from 'vue-bulma-modal'
import { uploadImage } from '../../api'

export default {
    components: {
        Modal
    },

    data () {
        return {
            name: '选择图片文件',
            imageFile: null
        }
    },

    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        onFileSelected (e) {
            const f = e.target.files[0]
            if (f && f.name !== undefined) {
                this.imageFile = f
                this.name = f.name
            }
        },

        upload() {
            const form = new FormData()
            form.append('image', this.imageFile)
            uploadImage(form).then(({loc}) => {
                    if (loc !== undefined) {
                        this.$emit('url', loc)
                        this.$emit('close')
                    }
                })    
        },
 
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;

        & + label {
            max-width: 80%;
            font-size: 1.25em;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            padding: 0.625em 1.25em;
            display: inline-block;
            color: #d3394c;
            border: 2px solid currentColor;
        }
    }
</style>
