Vue.component('commemt-content',{
	template:'\
	<div class="commentBox">\
		<h3>评论</h3>\
		<p v-if="comment.length==0">暂无评论，我来发表第一篇评论！</p>\
		<div v-else>\
			<div class="comment" v-for="item in comment" >\
				<b>匿名<span>{{item.time}}</span></b>\
				<p>{{item.content}}</p>\
			</div>\
		</div>\
	</div>',
	props: ['comment'],
	methods: {}
});

Vue.component('commentTextarea',{
	template:'\
	<div class="commentBox">\
		<h3>发表评论</h3>\
		<textarea name="" value="请填写评论内容" v-model="commentText"></textarea>\
		<button class="btn" @click="canelComment">取消</button>\
		<button class="btn" @click="addComment">发表</button>\
	</div>',
	props: [],
	data: function(){
		return {commentText:""}
	},
	methods: {
		addComment: function() {
			this.$emit("submit",this.commentText);
			this.commentText = "";
		},
		canelComment: function() {
			this.$emit("canel");
			this.commentText = "";
		}
	}
});

var comment = new Vue({
	el: "#comment",
	data: {
		commenter: "匿名",   //评论人
		type: 0,                //0为评论作者1为评论别人的评论2为评论别人的别人
		comment: []
	},
	methods: {
		addComment: function(data) {
			this.comment.push({
					time: getTime(),
					content: data
			});
		},
		canelCommit: function() {
		}
	}
})


//格式化时间
function getTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var day = now.getDate();
	return year+"-"+month+"-"+day;
}