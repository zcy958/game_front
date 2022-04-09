<template>
  <div class="my-button" :class="[{'button-type-primary':type=='primary'},
                                  {'button-type-grey':type=='grey'},
                                  {'button-type-blue':type=='blue'},
                                  {'button-is-block':block},
                                  {'button-has-round':round},
                                  {'button-is-long':long}]">
    <div class="button-icon" v-if="$slots.prefix">
        <slot name="prefix"></slot>
    </div>
    <span class="my-button-text" :class="[{'button-type-primary':type=='primary'},
                                          {'button-type-blue':type=='blue'},
                                          {'button-type-grey':type=='grey'}]">
        <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
    props: {
        // 按钮类型
        type: {
            type: String,
            default: 'primary',
            validator: function(res){
                return ['primary','grey','blue'].includes(res);
            }
        },
        // 是否是块级按钮
        block: Boolean,
        // 是否为大圆角
        round: Boolean,
        // 是否为长按钮
        long: Boolean,

    }
}
</script>

<style>
/* 按钮 */
.my-button{
    /* padding: 28px 26px; */
    height: 56px;
    width: 131px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    cursor: pointer;
}

/* ---------------------- */
.my-button-text{
    font-size: 14px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.my-button.button-is-block{
    display: flex!important;
    width: 100%;
}
.my-button.button-has-round{
    border-radius: 999999px!important;
}

.my-button.button-is-long{
    width: 176px;
}



/* --------按钮类型------- */
/* 默认类型 */
.my-button.button-type-primary{
    background-color: #6C5DD3;
}
.my-button-text.button-type-primary{
    color: #fff;
}
/* 灰色按钮 */
.my-button.button-type-grey{
    background-color: rgba(228, 228, 228, 0.49776);
}
.my-button-text.my-button.button-type-grey{
    color: #11142D;
}
/* 蓝色按钮 */
.my-button.button-type-blue{
    background-color: #3F8CFF;
}
.my-button-text.my-button.button-type-grey{
    color: #fff;
}



.button-icon{
    margin-right: 5px;
}
/* :icon-class="{'button-svg-game_white':type=='game_white'}"  */
</style>