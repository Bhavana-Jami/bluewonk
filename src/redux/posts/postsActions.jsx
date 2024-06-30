import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, serverTimestamp } from "../../firebaseConfig";

import {
  CREATE_POST,
  FETCH_POST_FAILURE,
  FETCH_POST_LOADING,
  FETCH_POST_SUCCESS,
  SHOW_BLOG_POST,
  UPDATE_LIKES_SUCCESS,
  GET_FIREBASE_POSTID,
  UPDATE_POST,
  DELETE_POST,
} from "./postsActionTypes";

export const showBlogPost = (flag, title, content, id) => {
  return {
    type: SHOW_BLOG_POST,
    payload: { flag, id },
  };
};

export const updateLikesSuccess = (updatedUserLikes) => {
  return {
    type: UPDATE_LIKES_SUCCESS,
    payload: updatedUserLikes,
  };
};

export const createPost = () => {
  return {
    type: CREATE_POST,
  };
};

export const fetchPostLoading = () => {
  return {
    type: FETCH_POST_LOADING,
  };
};
export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};
export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};
export const updatePost = (updatedPosts) => {
  return {
    type: UPDATE_POST,
    payload: updatedPosts,
  };
};
export const deletePost = () => {
  return {
    type: DELETE_POST,
  };
};
export const initiateCreatePost = (postDetails) => {
  return async (dispatch) => {
    try {
      // Firebase logic to add new post

      const docRef = await addDoc(collection(db, "posts"), {
        ...postDetails,
        createdAt: serverTimestamp(),
      });
      dispatch(createPost()); // Optionally pass postId to the action creator
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
};

export const initiateFetchingPost = () => {
  return (dispatch) => {
    dispatch(fetchPostLoading);
    const collectionRef = collection(db, "posts");
    getDocs(collectionRef)
      .then((snapshot) => {
        let list = [];
        snapshot.docs.map((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        dispatch(fetchPostSuccess(list));
      })
      .catch((error) => fetchPostFailure(error));
  };
};
export const initiateUpdatingLikes = (docId, userLikeStatus) => {
  return async (dispatch) => {
    try {
      const docRef = doc(db, "posts", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const currentLikes = docSnap.data().likes || 0;

        let newLikes = userLikeStatus ? currentLikes - 1 : currentLikes + 1;
        await updateDoc(docRef, { likes: newLikes });

        const updatedPost = { ...docSnap.data(), likes: newLikes };
        dispatch(updateLikesSuccess(updatedPost));
        console.log("updating likes success", updatedPost);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
};
export const intiateUpdatingPost = (docId, updatedPost) => {
  return async (dispatch) => {
    const docRef = doc(db, "posts", docId);
    try {
      await updateDoc(docRef, updatedPost);
      dispatch(
        updatePost({
          id: docId,
          ...updatedPost,
          createdAt: serverTimestamp(),
        })
      );
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };
};
export const initiateDeletingBlog = (docId) => {
  return async (dispatch) => {
    const docRef = doc(db, "posts", docId);
    try {
      await deleteDoc(docRef);
      console.log("doc deleted succefully");
    } catch (error) {
      console.log(error);
    }
  };
};
