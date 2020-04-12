const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://picture-cdn.wheretoget.it/i2u3rp-l-610x610-cap-drake+clothing-drake-urban-tumblr-tumblr+outfit-tumblr+girl-nail+polish-dope-hat-white-hands-white+hat-baseball+cap-snapback-black+white-6+god-ovo-black-hats-pray+paris-make-tu.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://66.media.tumblr.com/537f8ba1618e029033fa77bdd9b5e774/tumblr_pj4raoIkYn1wvcxzbo1_400.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://z-p42-scontent.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/92563256_148370856700591_6048177193821648297_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=1&_nc_ohc=x_MCu3NxZ6gAX-Gf4aH&oh=b3b7facd93fe85940608ea106febf1fd&oe=5EBDC645",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.ctfassets.net/q602vtcuu3w3/6EX5LZ0IuYwz3qkkUuz6aV/e14bc91b7d4bb52d24c9a7848673c583/200406-WK1-HP-2.jpg?q=80&w=1170&fm=webp",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
