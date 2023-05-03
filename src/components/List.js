import Article from "./Article";
import Video from "./Video";

export default function List({ list }) {
  return list.map(item => {
    switch (item.type) {
      case 'article':
        return (
          <Article {...item} />
        );

      default:
        return (
          <Video {...item} />
        );
    }
  });
}