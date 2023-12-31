export const pictures = [
  {
    key: "realid1",
    url: "https://fastly.picsum.photos/id/177/2515/1830.jpg?hmac=G8-2Q3-YPB2TreOK-4ofcmS-z5F6chIA0GHYAe5yzDY",
    disabledDrag: false,
    disabledReSorted: false,
  },
  {
    key: "realid2",
    url: "https://fastly.picsum.photos/id/177/2515/1830.jpg",
    disabledDrag: false,
    disabledReSorted: false,
  },
  {
    key: "realid4",
    url: "https://picsum.photos/200",
    disabledDrag: false,
    disabledReSorted: false,
  },
  {
    key: "realid6",
    url: "https://fastly.picsum.photos/id/177/2515/1830.jpg",
    disabledDrag: false,
    disabledReSorted: false,
  },
  { key: "2", disabledDrag: true, disabledReSorted: true },
  { key: "3", disabledDrag: true, disabledReSorted: true },
];

export const sortByUrl = (firstItem, secondItem) =>
  firstItem.url && !secondItem.url ? -1 : 1;

export const deleteUrlFromItem = (picture) => (currentPic) => {
  const pictureWithoutURL = {
    ...currentPic,
    url: "",
    disabledDrag: true,
    disabledReSorted: true,
  };

  return currentPic.key === picture.key ? pictureWithoutURL : currentPic;
};

export const addUrlToItem = (picture) => (currentPic) => {
  const pictureWithURL = {
    ...currentPic,
    url: "https://fastly.picsum.photos/id/177/2515/1830.jpg",
    disabledDrag: false,
    disabledReSorted: false,
  };

  return currentPic.key === picture.key ? pictureWithURL : currentPic;
};
