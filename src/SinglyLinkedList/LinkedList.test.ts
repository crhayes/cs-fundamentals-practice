import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  let list: LinkedList<Number>;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe("addFirst", () => {
    it("adds a node to an empty list and sets it as the head", () => {
      list.addFirst(1);

      expect(list.values).toEqual([1]);
      expect(list.head!.value).toEqual(1);
    });

    it("adds a node to a list with values and sets it as the head", () => {
      list.addFirst(1);
      list.addFirst(2);

      expect(list.head!.value).toEqual(2);
      expect(list.values).toEqual([2, 1]);
    });
  });

  describe("addLast", () => {
    it("adds a node to an empty list and sets it as the head", () => {
      list.addLast(1);

      expect(list.values).toEqual([1]);
      expect(list.head!.value).toEqual(1);
    });

    it("adds a node to a list with values", () => {
      list.addLast(1);
      list.addLast(2);

      expect(list.head!.value).toEqual(1);
      expect(list.values).toEqual([1, 2]);
    });
  });

  describe("removeFirst", () => {
    it("does nothing when the list is empty", () => {
      list.removeFirst();

      expect(list.head).toBeUndefined();
      expect(list.values).toEqual([]);
    });

    test("when one node exists it removes it and sets head to undefined", () => {
      list.addFirst(1);

      expect(list.head!.value).toEqual(1);

      list.removeFirst();

      expect(list.head).toBeUndefined();
      expect(list.values).toEqual([]);
    });

    it("when multiple nodes exist it removes the head", () => {
      list.addFirst(1);
      list.addLast(2);

      expect(list.head!.value).toEqual(1);
      expect(list.values).toEqual([1, 2]);

      list.removeFirst();

      expect(list.head!.value).toEqual(2);
      expect(list.values).toEqual([2]);
    });
  });

  describe("removeLast", () => {
    it("does nothing when the list is empty", () => {
      list.removeLast();

      expect(list.head).toBeUndefined();
      expect(list.values).toEqual([]);
    });

    test("when one node exists it removes it and sets head to undefined", () => {
      list.addFirst(1);

      expect(list.head!.value).toEqual(1);

      list.removeLast();

      expect(list.head).toBeUndefined();
      expect(list.values).toEqual([]);
    });

    it("when multiple nodes exist it removes the last node", () => {
      list.addFirst(1);
      list.addLast(2);

      expect(list.head!.value).toEqual(1);
      expect(list.values).toEqual([1, 2]);

      list.removeLast();

      expect(list.head!.value).toEqual(1);
      expect(list.values).toEqual([1]);
    });
  });

  describe("remove", () => {
    it("removes nothing if value is not found", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      list.remove(4);

      expect(list.values).toEqual([1, 2, 3]);
    });

    it("removes the node with the given value", () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);

      list.remove(2);

      expect(list.values).toEqual([1, 3]);
    });
  });

  describe("values", () => {
    it("returns an empty array when the list is empty", () => {
      expect(list.values).toEqual([]);
    });

    it("returns a list of values", () => {
      list.addFirst(2);
      list.addFirst(1);
      list.addLast(3);

      expect(list.values).toEqual([1, 2, 3]);
    });
  });

  describe("count", () => {
    it("equals 0 when the list is empty", () => {
      expect(list.count).toEqual(0);
    });

    it("equals 1 when the list has a node", () => {
      list.addFirst(1);

      expect(list.count).toEqual(1);
    });

    it("equals the number of nodes", () => {
      list.addFirst(1);
      list.addLast(2);
      list.addLast(3);
      list.addLast(4);
      list.addLast(5);

      expect(list.count).toEqual(5);
    });
  });
});
