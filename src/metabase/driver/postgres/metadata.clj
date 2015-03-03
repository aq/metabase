(ns metabase.driver.postgres.metadata
  (:require [metabase.driver.generic-sql.metadata :as generic]
            [metabase.driver.metadata :as driver]))

(defmethod driver/field-count :postgres [field]
  (generic/field-count field))

(defmethod driver/field-distinct-count :postgres [field]
  (generic/field-distinct-count field))