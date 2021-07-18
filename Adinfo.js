module.exports.config = {
	name: "infoad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdn",
	description: "( ăn trộm hi) ",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Chào các box đang sử dụng bot nhé^^\nđây là một chút ít thông tin về admin :v \nhọ và tên: Đỗ Trọng Hậu \nmình chỉ là người tạo bot chứ không phải tricker gì đâu nên các bạn đừng đe dọa huhu \n chiều cao: 1m65 \n sở thích: thích ngắm cái đẹp và chơi game kaka \n quan hệ: độc toàn thân càn người giải hộ nhé=) \nmột chút lưu ý cho các bạn sử dụng bot là đừng spam nhé kh là bot die nghỉ dùng \nyêu tất cả các box dùng bot moahh <3 `, event.threadID, event.messageID);
