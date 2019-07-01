/**
 * Helper for setting various video URLs (embed, direct link, and thumbnail)
 * for a game trailer. Expects either a YouTube or Vimeo link
 *
 * @param {obj} videoQuery - Expects an obj with a `raw` key, with a nested JSON stringified object
 * @param {obj} videoQuery.raw - e.g., { host: 'youtube', id: 'dQw4w9WgXcQ', thumbnailId: 'vimeo1234' }
 *
 * @returns {bool|obj} - Returns false if no video data is present. Otherwise, returns obj, e.g.
 *   {
 *     src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?showinfo=0&autohide=1',
 *     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
 *     thumb: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
 *   }
 */
const getVideoUrls = videoQuery => {
  const videoData = videoQuery && JSON.parse(videoQuery.raw);
  if (!videoData) return false;

  const video = {};
  const isYoutube = videoData.host === 'youtube';

  // Embed src
  const embed = isYoutube
    ? 'https://www.youtube.com/embed/'
    : 'https://player.vimeo.com/video/';
  const params = isYoutube
    ? '?showinfo=0&autohide=1&autoplay=1'
    : '?title=0&portait=0&byline=0&autoplay=1';
  video.src = `${embed}${videoData.id}${params}`;

  // Direct link
  const host = isYoutube
    ? 'https://www.youtube.com/watch?v='
    : 'https://www.vimeo.com/';
  video.url = `${host}${videoData.id}`;

  // Thumbnail src
  video.thumb = isYoutube
    ? `https://img.youtube.com/vi/${videoData.id}/mqdefault.jpg`
    : `https://i.vimeocdn.com/video/${videoData.thumbnailId}_260x146.jpg`;

  return video;
};

export default getVideoUrls;
