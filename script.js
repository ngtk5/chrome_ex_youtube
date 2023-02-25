// 登録chにある動画のリストを作る
const video_list = () => {
  const q = document.getElementsByTagName("ytd-item-section-renderer");
  let save_list = [];
  for(i=0;i<q.length;i++){
    save_list[i] = q[i].getElementsByTagName("ytd-grid-video-renderer");
  }
  return save_list;
};

// 登録chからshorts動画を非表示
const shorts_hide_subs = () => {
  const save_list = video_list();
  let tmp;
  for(i=0;i<save_list.length;i++){
    tmp = save_list[i];
    for(j=0;j<tmp.length;j++){
      if(true==save_list[i][j].querySelector("#thumbnail").href.includes('shorts')){
        save_list[i][j].style.display = "none";
      }
    }
  }
};

// ホーム画面からshorts動画を非表示
const shorts_hide_home = () => {
  const q = document.getElementsByTagName("ytd-rich-section-renderer");
  for(i=0;i<q.length;i++){
    q[i].style.display="none";
}
};

// 動画の画面上に表示される動画リンクやチャンネルリンクを非表示
const card_hide_video = () => {
  const x = document.querySelectorAll(".ytp-ce-element");
  for (i=0;i<x.length;i++){
    x[i].style.display="none";
  }
};

setInterval(() => {
  shorts_hide_home();
  shorts_hide_subs();
  card_hide_video();
}, 1000);

chrome.webNavigation.onCompleted.addListener( details => {
  // 現在のページがYouTubeページかどうか確認
  if (details.url.indexOf("youtube.com") !== -1) {
    // 短い動画を非表示にするためのコードをここで実行
    alert("youtube!")
  }
}, {url: [{hostContains: 'youtube.com'}]});
