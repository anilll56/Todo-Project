const { Router } = require('express');
const { getTodo, saveTodo, updateTodo, deleteTodo , changeCompleted  , changeImportant , AddGroup ,deleteGroup ,getGroups ,deleteGroupİtems, getGroupsByCreateAd1 , getTodoByCreateAd1} = require('../Controllers/TodoControllers');
const router = Router();

router.get('/', getTodo);

router.get("/getTodoByCreateAd1", getTodoByCreateAd1);

router.post("/save" , saveTodo );

router.post("/update" , updateTodo);

router.post("/delete", deleteTodo);

router.post("/changeCompleted", changeCompleted);

router.post("/changeImportant",changeImportant );

router.post("/deleteGroupitems" , deleteGroupİtems);

// Groups Routes

router.get("/GetGroup", getGroups);

router.get("/GetGroupItemsByCreateAd1", getGroupsByCreateAd1)

router.post("/AddGroup", AddGroup);

router.post("/DeleteGroup",deleteGroup )





module.exports = router;