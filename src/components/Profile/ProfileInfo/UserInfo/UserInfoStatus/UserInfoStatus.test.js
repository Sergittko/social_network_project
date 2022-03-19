import React from "react";
import { create } from "react-test-renderer";
import UserInfoStatus from "./UserInfoStatus";

describe("UserInfoStatus component", () => {
  test("statsus from props should be in state", () => {
    const component = create(<UserInfoStatus status="test_status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test_status");
  });

  test("span should be in component", () => {
    const component = create(<UserInfoStatus status="test_status" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children.length).toBe(1);
  });

  test("input shouldn't be in component", () => {
    const component = create(<UserInfoStatus status="test_status" />);
    const instance = component.root;
    expect(() => {
      let input = instance.findByType("input");
    }).toThrow();
  });

  test("span should return status text", () => {
    const component = create(<UserInfoStatus status="test_status" />);
    const instance = component.root;
    const span = instance.findByType("span");
    expect(span.children[0]).toBe("test_status");
  });

  test("input should be displayed in editMode", () => {
    const component = create(<UserInfoStatus status="test_status" />);
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    let input = instance.findByType("input");
    expect(input.props.value).toBe("test_status");
  });
});
