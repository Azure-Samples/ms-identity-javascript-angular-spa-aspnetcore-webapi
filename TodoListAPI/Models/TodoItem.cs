// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

namespace TodoListAPI.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Owner { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
    }
}