/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {

    public: void printStack(stack<TreeNode*> st) {
    while (!st.empty()) {
        cout << st.top() -> val << " ";
        st.pop();
    }
    cout << endl;
}

public:
vector < int > inorderTraversal(TreeNode * root) {
    vector < int > traversal;
    if (root == NULL) {
        return traversal;
    }
    stack < TreeNode *> stack;
    stack.push(root);
    while (!stack.empty()) {
        // printStack(stack);
        TreeNode * ptr = stack.top();
        // cout << "PTR -> val " << ptr -> val << endl;
        if (ptr -> left != NULL) {
            stack.push(ptr -> left);
            ptr -> left = NULL;
        } else {
            // cout << "in else " << endl;
            traversal.push_back(ptr -> val);
            stack.pop();
            if (ptr -> right != NULL) {
                stack.push(ptr -> right);
                ptr -> right = NULL;
            }
        }
    }
    return traversal;
}
    };