<template>
    <div class="login_container">
        <div class="login_box">
            <div class="top_box">
                <img src="../assets/logo.png"/>
            </div>
            <el-form ref="form" class="login_form">
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-user"></el-input>
                </el-form-item >
                <el-form-item>
                    <el-input prefix-icon="iconfont icon-3702mima"></el-input>
                </el-form-item>
                <el-form-item class="form_btns">
                    <el-button type="primary">登录</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>    
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang = "less" scoped>
    .login_container{
        background-color: #2b4b6b; 
        height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background-color: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        .top_box{
            width: 130px;
            height: 130px;
            border: 1px solid #eee;/*边线粗细*/
            border-radius: 50%;/*边框圆角*/
            padding: 10px;/*内间距*/
            box-shadow: 0 0 10px #ddd;/*外边框阴影*/
            position: absolute;
            left: 50%;/*左右移动*/
            transform: translate(-50%, -50%);/*x,y轴上移动*/
            background-color: #fff;
            img{
                height: 100%;
                width: 100%;
                border-radius: 50%; /*边框圆角;圆角半径*/
                background-color: #eee;
            }
        }
    }
    .login_form{
        position: absolute;
        width: 100%;
        bottom: 0;
        box-sizing: border-box; /*自适应布局，box不会随css变大*/
        padding: 0 20px; /*左右padding 20px*/
    }
    .form_btns{
        display: flex; /*弹性布局*/
        justify-content: end; /*弹性布局 居下方右侧*/
    }
    
</style>