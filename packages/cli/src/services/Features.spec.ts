import {CliPlatformTest} from "@tsed/cli-testing";
import {Features, hasFeature, hasValue} from "./Features";

describe("Features", () => {
  beforeEach(CliPlatformTest.create);
  afterEach(CliPlatformTest.reset);

  it("should add a provider info", async () => {
    const features = await CliPlatformTest.invoke(Features, []);

    expect(features).toBeInstanceOf(Array);
  });

  describe("hasValue", () => {
    it("should return false", () => {
      expect(hasValue("featuresDb.type", "")({featuresDb: {type: "test"}})).toEqual(false);
    });
    it("should return true", () => {
      expect(hasValue("featuresDb.type", "test")({featuresDb: {type: "test"}})).toEqual(true);
    });
  });

  describe("hasFeature", () => {
    it("should return false", () => {
      expect(hasFeature("feat")({features: []})).toEqual(false);
    });
    it("should return true", () => {
      expect(
        hasFeature("feat")({
          features: [
            {
              type: "feat"
            }
          ]
        })
      ).toEqual(true);
    });
  });
});
